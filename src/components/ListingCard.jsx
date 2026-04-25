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
  const bookNow = () => {
    console.log(" booked ");
  };

  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <img
          className="w-full h-52 object-cover"
          src="https://media.spinny.com/sp-file-system/public/2024-09-12/f138738a2f54418db7bcc5b1ca9ba946/file.JPG"
          alt="Maruti Suzuki Car"
        />

        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800 capitalize">
              Maruti Suzuki
            </h2>
            <span className="text-yellow-500 font-medium">⭐ 4.5</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span className="bg-gray-100 px-2 py-1 rounded-md">Petrol</span>
            <span className="font-semibold text-gray-800">₹3000 / day</span>
          </div>

          <button
            onClick={bookNow}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-medium transition duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default CarCard;
