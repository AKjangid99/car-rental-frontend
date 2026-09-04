import { Outlet, Link, useLocation } from "react-router-dom";
import EditCard from "../../components/editcard";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../../App";

const OwnerCarlist = () => {
  const { user } = useContext(MyContext);
  const [carList, setcarList] = useState([
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
  ]);

  async function getcars() {
    try {
      const res = await axios.get("http://localhost:3000/owner", {
        headers: {
          Authorization: `Bearer ${user.Token}`,
        },
      });

      setcarList(res.data.carlist);
      console.log("res == ", res.data.carlist);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getcars();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {carList.map((car) => (
            <div key={car.id} className="flex h-full">
              <EditCard {...car} onBook={() => alert(`Booking ${car.name}`)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OwnerCarlist;
