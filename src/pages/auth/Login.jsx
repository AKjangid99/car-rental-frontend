import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogIn } from "../../services/callSrvice";
import { storeData } from "../../services/storage";
import { MyContext } from "../../App";

const Login = () => {
  const { setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const [mode, setMode] = useState("rent");
  const [formData, setFormData] = useState({
    email: "",
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
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      let res = await handleLogIn(mode, formData);

      // Persist a single, consistent session shape so the user survives a
      // page reload (App reads this same object back into context) and API
      // calls keep access to the auth token.
      const sessionUser = {
        name: res.data.username,
        role: res.data.role,
        token: res.data.token,
      };
      storeData("sessiondetails", sessionUser);

      setUser(sessionUser);

      if (res.data.role == "owner") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }

    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-2">
          {mode === "rent" ? "Rent a Car" : "List Your Car"}
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          {mode === "rent"
            ? "Log in to rent your first car"
            : "Log in to provide your car for rent"}
        </p>

        <div className="flex bg-gray-200 rounded-full p-1 mb-6">
          <button
            type="button"
            onClick={() => setMode("rent")}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
              mode === "rent"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Rent Car
          </button>

          <button
            type="button"
            onClick={() => setMode("list")}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
              mode === "list"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            List Car
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Create a new accout?{" "}
          <Link to="/signup">
            <span className="text-blue-600 cursor-pointer hover:underline font-medium">
              SignUp
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
