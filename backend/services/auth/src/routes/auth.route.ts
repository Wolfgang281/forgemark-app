import { Router } from "express";
import { loginOrRegister, logout } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login-register", loginOrRegister);

authRouter.post("/logout", logout);

export default authRouter;
