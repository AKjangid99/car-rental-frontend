import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import ListingPage from "./pages/user/ListingPage";
import LandingPage from "./pages/home/LandingPage";
import CarDetails from "./pages/user/CarDetails";
import OwnerCarlist from "./pages/owner/MyCars";
import EditCard from "./components/editcard";
import BookingRequestPage from "./pages/owner/BookingRequests";
import Addcar from "./pages/owner/AddCar";
import { getData } from "./services/storage";
import ProtectedRoute from "./protectedRoute";
import Dashboard from "./pages/owner/Dashboard";

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function gatsessiondetails() {
    const data = getData("sessiondetails");

    console.log(" ====>", data);
    setUser(data);
    setLoading(false);
    console.log("user =====> ", user);
  }

  useEffect(() => {
    gatsessiondetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        {/* user Routes  */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/list" element={<ListingPage />} />
            <Route path="/list/:location" element={<ListingPage />} />
            <Route path="/details/:id" element={<CarDetails />} />
          </Route>

          {/* login and Signup */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Owner Routes */}

          <Route element={<ProtectedRoute allowedRoles={"owner"} />}>
            <Route path="/admin" element={<Dashboard />}>
              <Route index element={<OwnerCarlist />} />
              <Route path="booking" element={<BookingRequestPage />} />
              <Route path="add" element={<Addcar />} />
              <Route path="edit/:id" element={<Addcar />} />
            </Route>
          </Route>

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
