import type { IUserSession } from "./auth.js";

declare global {
  namespace Express {
    interface Request {
      user?: IUserSession;
    }
  }
}
