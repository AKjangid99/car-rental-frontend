import axios from "axios";
import React, { useContext, useState } from "react";
import { MyContext } from "../../App";

const Addcar = () => {
  const { user } = useContext(MyContext);
  const [carData, setCarData] = useState({
    carName: "",
    mileage: "",
    seats: "",
    rentPerDay: "",
    location: "",
    airbags: "No",
    isActive: true,
    // images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  // Specific handler for the toggle
  const handleToggle = () => {
    setCarData((prev) => ({ ...prev, isActive: !prev.isActive }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert("You can only upload a maximum of 4 images.");
      e.target.value = "";
      return;
    }
    setCarData({ ...carData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitted Data:", carData);

    console.log(`Bearer ${user.Token}`);
    try {
      const res = await axios.post("http://localhost:3000/owner/add", carData, {
        headers: {
          Authorization: `Bearer ${user.Token}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Add New Car</h2>
          <p className="text-gray-500 mt-2">
            Fill in the details to list your vehicle
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Car Name
            </label>
            <input
              type="text"
              name="carName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={carData.carName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mileage (km/l)
            </label>
            <input
              type="number"
              name="mileage"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={carData.mileage}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Seats
            </label>
            <input
              type="number"
              name="seats"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={carData.seats}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rent Per Day ($)
            </label>
            <input
              type="number"
              name="rentPerDay"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={carData.rentPerDay}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Airbags
            </label>
            <select
              name="airbags"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              value={carData.airbags}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={carData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Toggle Button Section */}
          <div className="flex flex-col justify-center">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </span>
            <div className="flex items-center gap-3">
              <span
                className={`text-sm ${!carData.isActive ? "text-red-500 font-bold" : "text-gray-400"}`}
              >
                Inactive
              </span>
              <button
                type="button"
                onClick={handleToggle}
                className={`${
                  carData.isActive ? "bg-green-500" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    carData.isActive ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span
                className={`text-sm ${carData.isActive ? "text-green-600 font-bold" : "text-gray-400"}`}
              >
                Active
              </span>
            </div>
          </div>

          {/* <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Car Images (Max 4)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition">
              <div className="space-y-1 text-center">
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload files</span>
                    <input
                      type="file"
                      className="sr-only"
                      multiple
                      onChange={handleImageChange}
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
          </div> */}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition duration-150"
            >
              Register Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcar;
