import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSignup } from "../../services/callSrvice";

const Signup = () => {
  const [role, setRole] = useState("rent");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, role };

    try {
      const res = await handleSignup(role, finalData);
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-[350px]">
        {/* Header - Identical style to Login */}
        <h2 className="text-2xl font-bold text-center mb-2">
          {role === "rent" ? "Join to Rent" : "Join to List"}
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          {role === "rent"
            ? "Create an account to rent cars"
            : "Create an account to provide cars"}
        </p>

        {/* Toggle - Exactly like the Login page */}
        <div className="flex bg-gray-200 rounded-full p-1 mb-6">
          <button
            type="button"
            onClick={() => setRole("rent")}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
              role === "rent"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Rent Car
          </button>

          <button
            type="button"
            onClick={() => setRole("list")}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
              role === "list"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            List Car
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-600 cursor-pointer hover:underline font-medium">
              Log In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
