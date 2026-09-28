export interface IUserSession {
  userID: string;
  name: string;
  email: string;
  role: "partner" | "admin";
}
