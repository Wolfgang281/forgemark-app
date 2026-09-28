import mongoose from "mongoose";
import { env } from "./env.config.js";

export const connectDB = async () => {
  try {
    const client = await mongoose.connect(env.MONGODB_URL);
    console.log(`MongoDB connected: ${client.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB in Auth Service:", error);
    process.exit(1);
  }
};
