import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import proxy from "express-http-proxy";
import morgan from "morgan";
import { env } from "./configs/env.config.js";
import { getCurrentUser } from "./controllers/user.controller.js";
import { authenticate } from "./middlewares/auth.middleware.js";

const app = express();

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/api/me", authenticate, getCurrentUser);

app.use("/api/auth", proxy(env.AUTH_SERVICE_URL));

app.listen(env.PORT, () => {
  console.log(`Gateway Server is running on port ${env.PORT}`);
});
