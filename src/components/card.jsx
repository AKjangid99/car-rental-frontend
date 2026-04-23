const CarCard = ({ image, name, location }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-full max-w-sm">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{location}</p>

        {/* Button */}
        <button className="mt-3 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
