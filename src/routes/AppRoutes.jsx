import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import UserDashboard from "../pages/user/Dashboard";
import OwnerDashboard from "../pages/owner/Dashboard";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar /> {/* Stays visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* User Protected Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />

        {/* Owner Protected Routes */}
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />

        {/* 404 Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
