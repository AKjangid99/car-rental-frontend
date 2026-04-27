import React from "react";

const ListingCard = ({
  image,
  name,
  type,
  pricePerDay,
  oldPrice,
  seats,
  transmission,
  mileage,
  rating,
  reviewsCount,
  onBook,
}) => {
  return (
    // Fixed width with w-full and max-w-sm; h-full ensures all cards in a row match height
    <div className="group w-full max-w-sm mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Image Section - Fixed Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm">
            <span className="text-[10px] font-black uppercase text-orange-600 tracking-tighter">
              {type}
            </span>
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md px-2 py-1 rounded-xl flex items-center gap-1 border border-white/10">
          <svg
            className="w-3 h-3 text-orange-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-bold text-white">{rating}</span>
          <span className="text-[10px] text-gray-400">({reviewsCount})</span>
        </div>
      </div>

      {/* Content Section - flex-grow pushes the button to the bottom */}
      <div className="px-3 pt-5 pb-2 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-5">
          <div className="max-w-[60%]">
            <h2 className="text-xl font-black text-gray-900 tracking-tight leading-tight mb-1 truncate">
              {name}
            </h2>
            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest italic truncate">
              {transmission} • {mileage}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            {oldPrice && (
              <p className="text-xs text-gray-400 line-through font-bold decoration-orange-500/50">
                ${oldPrice}
              </p>
            )}
            <div className="flex items-baseline gap-1 justify-end">
              <span className="text-xl font-black text-gray-900">
                ${pricePerDay}
              </span>
              <span className="text-gray-400 text-[10px] font-bold uppercase">
                /day
              </span>
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 mt-auto">
          <div className="bg-gray-50 rounded-2xl p-2 text-center border border-transparent hover:border-orange-100 transition-colors">
            <p className="text-[9px] font-bold text-gray-400 uppercase">
              Seats
            </p>
            <p className="text-xs font-black text-gray-700">{seats}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-2 text-center border border-transparent hover:border-orange-100 transition-colors">
            <p className="text-[9px] font-bold text-gray-400 uppercase">Gear</p>
            <p className="text-xs font-black text-gray-700">
              {transmission[0]}
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-2 text-center border border-transparent hover:border-orange-100 transition-colors">
            <p className="text-[9px] font-bold text-gray-400 uppercase">
              Range
            </p>
            <p className="text-xs font-black text-gray-700">Auto</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onBook}
          className="group/btn relative w-full h-12 bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 active:scale-95 shadow-lg mt-auto"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div> */}
          <div className="relative z-10 flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
            <span>Book Now </span>
            <svg
              className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
