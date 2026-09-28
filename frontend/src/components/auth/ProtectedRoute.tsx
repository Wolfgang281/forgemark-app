import type { IUser } from "@/types/user";
import type { RootState } from "@/redux/store";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: IUser["role"];
}

// Dev-only escape hatch so pages can be reviewed without a real login.
// Set VITE_DISABLE_AUTH_GUARD=true in your local .env — never in production.
const isAuthGuardDisabled = import.meta.env.VITE_DISABLE_AUTH_GUARD === "true";

export function ProtectedRoute({
  children,
  requiredRole,
}: ProtectedRouteProps) {
  const currentUser = useSelector((state: RootState) => state.user.user);

  if (isAuthGuardDisabled) {
    return <>{children}</>;
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
