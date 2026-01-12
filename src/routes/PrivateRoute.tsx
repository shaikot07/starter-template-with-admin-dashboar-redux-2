// src/routes/PrivateRoute.tsx
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "@/redux/hooks";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector((state: any) => state.auth.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
