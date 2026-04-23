import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between relative">
      <div className="text-xl font-bold tracking-wide">CarRental</div>

      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
