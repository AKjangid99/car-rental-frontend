import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../App";

const Navbar = () => {
  const { user, setUser } = useContext(MyContext);

  const handleLogout = () => {
    localStorage.removeItem("sessiondetails");
    setUser(null);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold tracking-wide">
        CarRental
      </Link>

      <div className="flex items-center gap-4">
        {/* If user DOES NOT exist, show Login/Signup */}
        {!user ? (
          <>
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
          </>
        ) : (
          /* If user DOES exist, show their name and a Logout button */
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              <span className="font-semibold text-white">
                {user.name || user.username}
              </span>
            </span>

            {/* If they are an admin/owner, show dashboard link */}
            {user.role === "owner" && (
              <Link to="/admin" className="text-blue-400 hover:underline">
                Dashboard
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-600 text-xs rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
