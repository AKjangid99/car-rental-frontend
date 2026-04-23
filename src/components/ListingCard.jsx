import React from "react";

const CarCard = ({
  image,
  name,
  type,
  pricePerDay,
  oldPrice,
  seats,
  bags,
  largeBags,
  transmission,
  mileage,
  rating,
  reviewsCount,
  onBook,
}) => {
  const Icon = ({ path, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-4 h-4 ${className}`}
    >
      <path d={path} />
    </svg>
  );

  const ICONS = {
    check:
      "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z",
    people:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
    bag: "M19 6h-2V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h2v2h-2V4zM5 8h14v12H5V8z",
    gear: "M19.44 12.99l.94-.94c.3-.3.3-.79 0-1.09l-.94-.94c-.3-.3-.79-.3-1.09 0l-.94.94c-.3.3-.3.79 0 1.09l.94.94c.3.3.79.3 1.09 0zm-14.88-1.98l-.94.94c-.3.3-.3.79 0 1.09l.94.94c.3.3.79.3 1.09 0l.94-.94c.3-.3.3-.79 0-1.09l-.94-.94c-.3-.3-.79-.3-1.09 0zM12 16.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM2.5 12h3M18.5 12h3M12 2.5v3M12 18.5v3",
    mileage:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",
    ac: "M19.1 4.9C17.3 3.1 14.8 2 12 2s-5.3 1.1-7.1 2.9C3.1 6.7 2 9.2 2 12s1.1 5.3 2.9 7.1C6.7 20.9 9.2 22 12 22s5.3-1.1 7.1-2.9c1.8-1.8 2.9-4.3 2.9-7.1s-1.1-5.3-2.9-7.1zM12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z",
  };

  // return (
  //   <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group mb-6">
  //     {/* Image Section - Takes up 40% on desktop */}
  //     <div className="relative w-full md:w-2/5 overflow-hidden">
  //       <img
  //         src={image}
  //         alt={name}
  //         className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
  //       />
  //       <div className="absolute top-4 left-4">
  //         <span
  //           className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
  //             available
  //               ? "bg-green-100 text-green-700"
  //               : "bg-red-100 text-red-700"
  //           }`}
  //         >
  //           {available ? "● Available" : "● Booked"}
  //         </span>
  //       </div>
  //     </div>

  //     {/* Content Section - Takes up 60% */}
  //     <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
  //       <div>
  //         <div className="flex justify-between items-start">
  //           <div>
  //             <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">
  //               {type}
  //             </p>
  //             <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
  //             <p className="text-gray-400 text-sm flex items-center mt-1">
  //               <span className="mr-1">📍</span> {location}
  //             </p>
  //           </div>
  //           <div className="text-right">
  //             <p className="text-2xl font-black text-gray-900">
  //               ₹{pricePerDay}
  //             </p>
  //             <p className="text-gray-400 text-xs font-medium">per day</p>
  //           </div>
  //         </div>

  //         <hr className="my-6 border-gray-100" />

  //         {/* Features Grid */}
  //         <div className="grid grid-cols-3 gap-4">
  //           <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl">
  //             <span className="text-lg">💺</span>
  //             <span className="text-xs font-semibold mt-1">{seats} Seats</span>
  //           </div>
  //           <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl">
  //             <span className="text-lg">⚙️</span>
  //             <span className="text-xs font-semibold mt-1">{transmission}</span>
  //           </div>
  //           <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl">
  //             <span className="text-lg">⛽</span>
  //             <span className="text-xs font-semibold mt-1">{fuel}</span>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Action Button */}
  //       <button
  //         disabled={!available}
  //         onClick={onBook}
  //         className={`w-full mt-6 py-4 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 ${
  //           available
  //             ? "bg-gray-900 text-white hover:bg-blue-600 shadow-lg shadow-gray-200"
  //             : "bg-gray-200 text-gray-400 cursor-not-allowed"
  //         }`}
  //       >
  //         {available ? "Book This Ride" : "Currently Unavailable"}
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="w-full lg:w-1/3 flex justify-center lg:block">
          <img
            src={image}
            alt={name}
            className="h-48 lg:h-56 w-auto lg:w-full object-contain"
          />
        </div>

        {/* 2. Content & Details Section */}
        <div className="flex-grow w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">
              {type}
            </span>
          </div>

          {/* Key Specifications - 2 columns on mobile, single row on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <span>{seats}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon path={ICONS.bag} className="text-gray-400" />
              <span>
                {bags} + {largeBags}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon path={ICONS.gear} className="text-gray-400" />
              <span>{transmission}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon path={ICONS.mileage} className="text-gray-400" />
              <span>{mileage}</span>
            </div>
          </div>

          {/* Checkmark List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6 text-sm">
            <div className="flex items-center gap-3 text-green-700 font-medium">
              <Icon path={ICONS.check} className="text-green-500" />
              Free Cancellation
            </div>
            <div className="flex items-center gap-3 text-green-700 font-medium">
              <Icon path={ICONS.check} className="text-green-500" />
              Price Guarantee
            </div>
            <div className="flex items-center gap-3 text-green-700 font-medium">
              <Icon path={ICONS.check} className="text-green-500" />
              Instantly Confirmed
            </div>
            <div className="flex items-center gap-3 text-green-700 font-medium">
              <Icon path={ICONS.check} className="text-green-500" />
              Third Party Liability
            </div>
          </div>

          {/* Rating - Left aligned */}
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl w-fit">
            <span className="text-lg font-bold text-green-700">{rating}</span>
            <span className="font-semibold text-gray-900">Excellent</span>
            <span className="text-gray-500">({reviewsCount} reviews)</span>
          </div>
        </div>

        {/* 3. Pricing Section - Full width on mobile, Right aligned on desktop */}
        <div className="w-full lg:w-48 flex flex-col items-center lg:items-end lg:justify-between lg:h-full lg:border-l lg:border-gray-100 lg:pl-8 lg:-my-8 lg:py-8 mt-6 lg:mt-0">
          <div className="text-center lg:text-right mb-4 lg:mb-0">
            {/* Old Price + Discount */}
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-1">
              <span className="text-gray-400 line-through">${oldPrice}</span>
              <span className="text-green-600 font-semibold text-sm">
                {Math.round((1 - pricePerDay / oldPrice) * 100)}% Off!
              </span>
            </div>

            {/* New Price */}
            <p className="text-4xl font-extrabold text-gray-950">
              ${pricePerDay}
            </p>
            <p className="text-gray-500 text-sm mt-1">per day</p>
          </div>

          {/* Action Button */}
          <button
            onClick={onBook}
            className="w-full lg:w-fit py-4 lg:py-3 lg:px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl lg:rounded-xl shadow-lg shadow-blue-100 transition duration-150 active:scale-[0.98]"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
