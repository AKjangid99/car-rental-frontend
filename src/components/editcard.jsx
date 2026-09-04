import React from "react";

// 1. Wrap props in { } to destructure them
const EditCard = ({
  images,
  carname,
  type,
  rent,
  num_seats,
  transmission = "Auto",
  mileage,
  status = "Active",
}) => {
  // 2. Safely handle the image array you just created in the DB
  const FALLBACK_CAR_IMAGE =
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000";

  const displayImage =
    images && images.length > 0 ? images[0] : FALLBACK_CAR_IMAGE;

  return (
    <div className="group max-w-sm mx-auto bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={displayImage}
          alt={carname}
          onError={(e) => {
            e.currentTarget.src = FALLBACK_CAR_IMAGE;
          }}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
            {status}
          </span>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            {/* <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              {type}
            </p> */}
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              {carname}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-gray-900">${rent}</span>
            <span className="text-gray-500 text-sm font-medium">/day</span>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex gap-2 mb-6">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">
            {transmission}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">
            {num_seats} Seats
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">
            {mileage}
          </span>
        </div>

        {/* Action Button */}
        <button className="w-full py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 shadow-lg shadow-gray-200 hover:shadow-blue-200 transition-all duration-300 transform active:scale-95">
          Edit Vehicle Details
        </button>
      </div>
    </div>
  );
};

export default EditCard;
