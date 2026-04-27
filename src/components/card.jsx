import React from "react";

const CarCard = ({ image, name, location, price = "180" }) => {
  return (
    <div className="group max-w-sm mx-auto bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      {/* Image Container with Floating Price */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
          <svg
            className="w-3 h-3 text-orange-500 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-bold text-gray-800">4.9</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <svg
                className="w-3 h-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {location}
              </p>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              {name}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-gray-900">${price}</span>
            <span className="text-gray-500 text-sm font-medium">/day</span>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex gap-2 mb-6">
          <span className="px-2 py-1 bg-orange-50 text-orange-700 text-[10px] font-bold rounded uppercase tracking-wider">
            Unlimited Miles
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase tracking-wider">
            Instant Book
          </span>
        </div>

        {/* Action Button */}
        <button className="w-full py-4 bg-orange-500 text-white text-sm font-bold rounded-xl hover:bg-orange-600 shadow-lg shadow-orange-100 hover:shadow-orange-200 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2">
          <span>Book This Ride</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
