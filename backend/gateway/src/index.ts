import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import proxy from "express-http-proxy";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL as string,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL as string));

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.error("Error starting Gateway Server:", error);
  } else {
    console.log(`Gateway Server is running on port ${process.env.PORT}`);
  }
});
