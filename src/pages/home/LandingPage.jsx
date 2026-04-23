import React, { useState, useEffect } from "react";
import CarCard from "../../components/card";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";

import Button from "../../components/Button";

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const featuredCars = [
    {
      id: 1,
      name: "Toyota Fortuner",
      location: "Delhi",
      image:
        "https://www.deccanchronicle.com/h-upload/2024/04/22/1085406-fortunerleaderwhite.webp",
    },
    {
      id: 2,
      name: "Maruti 800",
      location: "Delhi",
      image:
        "https://i.ytimg.com/vi/uuNjsK_5s4U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDhjDdhiaFpdViSm6ZSAlaUtEqQAw",
    },
    {
      id: 3,
      name: "Alto 800",
      location: "Delhi",
      image:
        "https://imgd.aeplcdn.com/1920x1080/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=80&q=80",
    },
    {
      id: 4,
      name: "Breeza",
      location: "Delhi",
      image:
        "data:image/jpeg;base64,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",
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
                  type="text"
                  placeholder="Where do you need a car?"
                  className="w-full text-slate-800 text-lg outline-none placeholder:text-slate-400 bg-transparent"
                />
              </div>

              <button className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-600/30">
                Find a Car
              </button>
            </div>

            {/* Trust Pilot / Stats (Optional Enhancement) */}
            <div className="mt-10 flex gap-8 text-slate-300/80 text-sm font-medium">
              <span>★ 4.9 Average Rating</span>
              <span>•</span>
              <span>1M+ Trips Booked</span>
            </div>
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
                <CarCard key={car.id} {...car} />
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
