import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import ListingPage from "./pages/user/ListingPage";
import LandingPage from "./pages/home/LandingPage";
import CarDetails from "./pages/user/CarDetails";

function App() {
  return (
    <>
      {/* user Routes  */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/list" element={<ListingPage />} />
          <Route path="/details/:id" element={<CarDetails />} />
        </Route>

        {/* login and Signup */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Owner Routes */}
        <Route path="/admin/Home"></Route>

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
