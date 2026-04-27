import React, { useState } from "react";
import ListingCard from "../../components/ListingCard";

const ListingPage = () => {
  const carList = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCmLuI_G61puiUwX5Unx8TExDT_uFLUx4CQDXu2tvAGuRIN2ekFQdaq0_nLClwSUFHj-42MjWa7wiuiQE3tkEVdgbPl-taRdRxz-31w&s=10",
      name: "Hyundai Creta",
      type: "SUV",
      pricePerDay: 210,
      oldPrice: 250,
      seats: 5,
      bags: 2,
      largeBags: 1,
      transmission: "Auto",
      mileage: "16 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 188,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMncg5q6QY9l3YuVzVKbb8zlFVyJNgVmNhw&s",
      name: "Hyundai Creta",
      type: "SUV",
      pricePerDay: 210,
      oldPrice: 250,
      seats: 5,
      bags: 2,
      largeBags: 1,
      transmission: "Auto",
      mileage: "16 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 188,
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1xti8VbqAg_gLzRPgBRygLpas1EzmSB7Cw&s",
      name: "Hyundai Creta",
      type: "SUV",
      pricePerDay: 210,
      oldPrice: 250,
      seats: 5,
      bags: 2,
      largeBags: 1,
      transmission: "Auto",
      mileage: "16 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 188,
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFtULyFKe_fEHacnMjpz_B-WFkeCnPcY3AA&s",
      name: "Hyundai Creta",
      type: "SUV",
      pricePerDay: 210,
      oldPrice: 250,
      seats: 5,
      bags: 2,
      largeBags: 1,
      transmission: "Auto",
      mileage: "16 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 188,
    },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "SUV", "Sedan", "Luxury", "Electric"];
  // const filteredCars = carList.filter((car) =>
  //   filter === "All" ? true : car.type === filter,
  // );

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Titles */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-orange-600 text-xs font-black uppercase tracking-[0.2em]">
                Premium Rental
              </span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tight">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                Fleet
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-md">
              Premium vehicles for your next journey. No hidden fees.
            </p>
          </div>
          {/* Filter Bar */}
          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* <div className="flex p-1.5 bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    filter === cat
                      ? "bg-gray-900 text-white shadow-lg"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div> 

            {/* Counter Badge
            <div className="hidden sm:flex items-center gap-2 px-4 py-3 bg-orange-50 border border-orange-100 rounded-2xl shadow-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-black text-orange-700 uppercase tracking-tighter">
                {carList.length} Available
              </span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Grid Section - Use filteredCars.map here instead of carList.map */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {carList.map((car) => (
            <div key={car.id} className="flex h-full">
              <ListingCard
                {...car}
                onBook={() => alert(`Booking ${car.name}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Updated Empty State */}
      {carList.length === 0 && (
        <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-gray-200 max-w-7xl mx-auto">
          <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            No {filter}s found
          </h3>
          <p className="text-gray-500 mt-1">
            Try selecting a different category or check back later.
          </p>
          <button
            onClick={() => setFilter("All")}
            className="mt-6 text-sm font-bold text-orange-600 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ListingPage;
