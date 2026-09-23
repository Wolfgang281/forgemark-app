import type { Document } from "mongoose";

export interface IUser extends Document {
  fireBaseUID: string;
  name: string;
  email: string;
  password: string;
  role: "partner" | "admin";
  partnerProfile: IPartnerProfile;
  paymentDetails: IPaymentDetails;
  totalSales: number;
  totalRevenue: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPartnerProfile {
  slug?: string;
  website?: string;
  bio?: string;
  socialLinks?: ISocialLinks;
}

export interface ISocialLinks {
  youtube?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
}

export interface IPaymentDetails {
  method: "upi" | "card";
  upiId?: string;
  accountNumber?: string;
  accountHolderName?: string;
  accountIFSC_Code?: string;
}
