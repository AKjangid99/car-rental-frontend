import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MyContext } from "./App";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(MyContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
