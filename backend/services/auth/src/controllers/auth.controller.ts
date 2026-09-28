import redis from "@pixelpeti/redis";
import type { Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";
import { randomUUID } from "node:crypto";
import { firebaseApp } from "../configs/firebase.config.js";
import UserModel from "../models/user.model.js";

export const loginOrRegister = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    const decodedToken = await getAuth(firebaseApp).verifyIdToken(token);

    let user = await UserModel.findOne({ fireBaseUID: decodedToken.uid });
    if (!user) {
      user = await UserModel.create({
        name: decodedToken.name || "Unknown",
        email: decodedToken.email || "Unknown",
        fireBaseUID: decodedToken.uid,
        password: decodedToken.uid, // Using Firebase UID as a placeholder password
      });
    }

    const sessionID = randomUUID();
    await redis.set(
      `session:${sessionID}`,
      JSON.stringify({
        userID: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }),
      "EX",
      3600,
    ); // Expire in 1 hour

    res.cookie("sessionID", sessionID, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000, // 1 hour in milliseconds
    });

    res
      .status(200)
      .json({ success: true, message: "Login/Register successful", user });
  } catch (error) {
    console.error("Error in loginOrRegister controller:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const sessionID = req.cookies?.sessionID;
    if (sessionID) {
      await redis.del(`session:${sessionID}`);

      res.clearCookie("sessionID", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    console.error("Error while logging out a user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
