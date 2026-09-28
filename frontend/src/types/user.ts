export interface IUser {
  userID: string;
  name: string;
  email: string;
  role: "partner" | "admin";
}
