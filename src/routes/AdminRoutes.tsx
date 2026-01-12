// src/routes/AdminRoute.tsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode } from "react";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

type AdminRouteProps = {
  children: ReactNode;
};

const AdminRoute = ({ children }: AdminRouteProps) => {
  const user = useSelector(selectCurrentUser);

  console.log("iam the user from admin route", user);
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
