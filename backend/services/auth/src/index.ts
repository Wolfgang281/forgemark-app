import cookieParser from "cookie-parser";
import express from "express";
import { connectDB } from "./configs/db.config.js";
import { env } from "./configs/env.config.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);

connectDB().then(() => {
  app.listen(env.PORT, () => {
    console.log(`Auth Server is running on port ${env.PORT}`);
  });
});
