import redis from "@pixelpeti/redis";
import type { NextFunction, Request, Response } from "express";
import type { IUserSession } from "../types/auth.js";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sessionID = req.cookies?.sessionID;
    if (!sessionID)
      return res
        .status(401)
        .json({ success: false, message: "Please Login First" });

    const redisSession = await redis.get(`session:${sessionID}`);

    if (!redisSession)
      return res
        .status(401)
        .json({ success: false, message: "Please Login First" });

    req.user = JSON.parse(redisSession) as IUserSession;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while authenticating a user (gateway service)",
    });
  }
};
