import mongoose from "mongoose";
import type { IUser } from "./user.types.js";

const userSchema = new mongoose.Schema<IUser>(
  {
    fireBaseUID: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, select: false, trim: true },
    role: { type: String, enum: ["partner", "admin"], default: "partner" },
    partnerProfile: {
      slug: { type: String, trim: true, unique: true, sparse: true },
      website: { type: String, trim: true, default: "" },
      bio: { type: String, trim: true, default: "" },
      socialLinks: {
        youtube: { type: String, trim: true, default: "" },
        instagram: { type: String, trim: true, default: "" },
        github: { type: String, trim: true, default: "" },
        linkedin: { type: String, trim: true, default: "" },
      },
    },
    paymentDetails: {
      method: { type: String, enum: ["upi", "card"] },
      upiId: { type: String, trim: true, default: "" },
      accountNumber: { type: String, trim: true, default: "" },
      accountHolderName: { type: String, trim: true, default: "" },
      accountIFSC_Code: { type: String, trim: true, default: "" },
    },
    totalSales: {
      type: Number,
      default: 0,
      min: [0, "Total sales cannot be negative"],
    },
    totalRevenue: {
      type: Number,
      default: 0,
      min: [0, "Total revenue cannot be negative"],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
