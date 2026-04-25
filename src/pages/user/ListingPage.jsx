import React from "react";
import ListingCard from "../../components/ListingCard";

const ListingPage = () => {
  const carList = [
    {
      id: 1,
      image: "/images/creta.png",
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
      onBook: true,
    },
    {
      id: 2,
      image: "/images/swift.png",
      name: "Maruti Swift",
      type: "Hatchback",
      pricePerDay: 120,
      oldPrice: 150,
      seats: 5,
      bags: 1,
      largeBags: 1,
      transmission: "Manual",
      mileage: "22 km/l",
      hasAC: true,
      rating: 4.5,
      reviewsCount: 142,
      onBook: false,
    },
    {
      id: 3,
      image: "/images/city.png",
      name: "Honda City",
      type: "Sedan",
      pricePerDay: 180,
      oldPrice: 220,
      seats: 5,
      bags: 2,
      largeBags: 1,
      transmission: "Auto",
      mileage: "18 km/l",
      hasAC: true,
      rating: 4.6,
      reviewsCount: 210,
      onBook: true,
    },
    {
      id: 4,
      image: "/images/thar.png",
      name: "Mahindra Thar",
      type: "SUV",
      pricePerDay: 300,
      oldPrice: 350,
      seats: 4,
      bags: 1,
      largeBags: 1,
      transmission: "Manual",
      mileage: "15 km/l",
      hasAC: true,
      rating: 4.8,
      reviewsCount: 95,
      onBook: false,
    },
    {
      id: 5,
      image: "/images/innova.png",
      name: "Toyota Innova",
      type: "MPV",
      pricePerDay: 260,
      oldPrice: 300,
      seats: 7,
      bags: 3,
      largeBags: 2,
      transmission: "Auto",
      mileage: "14 km/l",
      hasAC: true,
      rating: 4.7,
      reviewsCount: 320,
      onBook: true,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {carList.map((car) => (
          <ListingCard
            key={car.id}
            {...car}
            onBook={() => alert(`Booking ${car.name}`)}
          />
        ))}
      </div>
    </>
  );
};

export default ListingPage;
