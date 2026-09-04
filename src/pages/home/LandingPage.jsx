import React, { useState, useEffect, useRef } from "react";
import CarCard from "../../components/card";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";

import Button from "../../components/Button";
import ListingCard from "../../components/ListingCard";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const searchInput = useRef(null);
  const navigate = useNavigate();

  const search = () => {
    const value = searchInput.current.value;
    if (value) {
      navigate(`/list/${value}`);
    }
  };

  const featuredCars = [
    {
      id: 1,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zsHGkYvVda4u9kOGMocQwRQJ8GBVp9SzWg&s",
      ],
      carname: "Porsche Taycan",
      type: "Electric",
      rent: 500,
      oldPrice: 700,
      num_seats: 2,
      bags: 4,
      largeBags: 1,
      transmission: "Auto",
      mileage: "4 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 188,
    },
    {
      id: 2,
      images: [
        "https://encrypted-tbn0.gstatic.com/imagess?q=tbn:ANd9GcRDMncg5q6QY9l3YuVzVKbb8zlFVyJNgVmNhw&s",
      ],
      carname: "Hyundai Creta",
      type: "SUV",
      rent: 210,
      oldPrice: 250,
      num_seats: 5,
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
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZiiUq0tudLqtks3JfDsFikWer2DZUDcCMw&s",
      ],
      carname: "Fortuner",
      type: "SUV",
      rent: 210,
      oldPrice: 250,
      num_seats: 7,
      bags: 2,
      largeBags: 1,
      transmission: "Auto",
      mileage: "8 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 188,
    },
    {
      id: 4,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlNdagI3cRtCN7XG5nnLz1OOPuPTdi9fgQA&s",
      ],
      carname: "Dodge Hellcat",
      type: "Sport",
      rent: 210,
      oldPrice: 250,
      num_seats: 5,
      bags: 2,
      largeBags: 1,
      transmission: "Auto",
      mileage: "16 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 188,
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <section className="relative min-h-[80vh] flex items-center justify-center text-white py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
              alt="Luxury car on open road"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/40 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/80"></div>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <span className="mb-4 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
              New: Electric rentals now available
            </span>

            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-sm">
              Drive the <span className="text-blue-400">Perfect</span> Car Today
            </h1>

            <p className="text-lg md:text-2xl text-slate-200 max-w-2xl mb-12 leading-relaxed">
              From daily commutes to weekend getaways, choose from thousands of
              unique cars shared by local owners.
            </p>

            <div className="w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl flex flex-col md:flex-row gap-3">
              <div className="flex-[2] flex items-center px-5 py-4 gap-3 border-b md:border-b-0 md:border-r border-slate-200">
                <SearchIcon className="text-blue-600 w-6 h-6" />
                <input
                  ref={searchInput}
                  type="text"
                  placeholder="Where do you need a car?"
                  className="w-full text-slate-800 text-lg outline-none placeholder:text-slate-400 bg-transparent"
                />
              </div>

              <button
                className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-600/30"
                onClick={search}
              >
                Find a Car
              </button>
            </div>

            {/* <div className="mt-10 flex gap-8 text-slate-300/80 text-sm font-medium">
              <span>★ 4.9 Average Rating</span>
              <span>•</span>
              <span>1M+ Trips Booked</span>
            </div> */}
          </div>

          {/* Decorative Light Glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Featured Vehicles
              </h2>
              <p className="text-slate-500 mt-2">
                Hand-picked cars for your next journey.
              </p>
            </div>
            <Button variant="outline" text="View All" />
          </div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-64 bg-slate-100 rounded-2xl animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCars.map((car) => (
                <ListingCard key={car.id} {...car} />
              ))}
            </div>
          )}
        </section>

        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-3xl font-bold text-slate-900 mb-16">
              Why Rent With DriveEase?
            </h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <VerifiedUserIcon fontSize="large" />
                </div>
                <h4 className="text-xl font-bold mb-3">Fully Insured</h4>
                <p className="text-slate-600 leading-relaxed">
                  Drive with peace of mind. Every rental includes comprehensive
                  insurance coverage.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <DirectionsCarIcon fontSize="large" />
                </div>
                <h4 className="text-xl font-bold mb-3">Verified Owners</h4>
                <p className="text-slate-600 leading-relaxed">
                  We vet all our hosts and vehicles to ensure a premium
                  experience every time.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <SupportAgentIcon fontSize="large" />
                </div>
                <h4 className="text-xl font-bold mb-3">24/7 Support</h4>
                <p className="text-slate-600 leading-relaxed">
                  Our dedicated support team is always available to help you on
                  the road.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
