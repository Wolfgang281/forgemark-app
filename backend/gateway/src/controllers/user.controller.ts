import type { Request, Response } from "express";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error in getCurrentUser" });
  }
};
