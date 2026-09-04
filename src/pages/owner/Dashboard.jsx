import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Owner Dashboard
          </h1>
          <p className="text-gray-500">
            Manage your fleet and booking requests
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 bg-gray-200/50 p-1.5 rounded-2xl w-fit mb-8">
          <Link
            to="/admin"
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              isActive("/admin")
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            My Cars
          </Link>

          <Link
            to="/admin/booking"
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              isActive("/admin/booking")
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Requests
          </Link>

          <Link
            to="/admin/add"
            className="ml-4 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
          >
            <span>+</span> Add New Car
          </Link>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 min-h-[400px]">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
