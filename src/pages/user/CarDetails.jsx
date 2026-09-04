import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import RangeCalendar from "../../components/Calander";
import { MyContext } from "../../App";

const CarDetils = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [range, setRange] = useState();
  const { user } = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Car data passed from the listing card via router state.
  const selected = location.state?.car;

  const car = {
    name: selected?.carname || "Car #" + id,
    type: selected?.type || "Rental Vehicle",
    price: selected?.rent ?? 0,
    rating: selected?.rating ? `${selected.rating} / 5.0` : "N/A",
    reviews: selected?.reviewsCount ?? 0,
    images:
      selected?.images && selected.images.length > 0
        ? selected.images
        : [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1000",
          ],
    // Specs listed as text labels
    specs: [
      { label: "Seats", value: `${selected?.num_seats ?? "-"}` },
      { label: "Transmission", value: selected?.transmission || "Auto" },
      { label: "Mileage", value: selected?.mileage || "-" },
      { label: "Type", value: selected?.type || "-" },
    ],
    features: [
      "Premium Leather",
      "Harman Kardon Sound",
      "Parking Assistant",
      "Carbon Fiber Trim",
    ],
  };

  // Derive the booking summary from the dates the user actually selects.
  const days =
    range?.from && range?.to
      ? differenceInCalendarDays(range.to, range.from) + 1
      : 0;
  const subtotal = days * car.price;
  const taxes = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + taxes;
  const currency = (n) => `$${Number(n).toFixed(2)}`;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 bg-white text-slate-900">
      {/* Top Navigation */}
      {/* <div className="flex justify-between items-center mb-10 border-b pb-6">
        <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors">
          Back to Fleet
        </button>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <button className="hover:text-blue-600">Share</button>
          <button className="hover:text-red-500">Wishlist</button>
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Section */}
        <div className="lg:col-span-7">
          <h1 className="text-5xl font-black italic uppercase mb-2 tracking-tighter">
            {car.name}
          </h1>
          <p className="text-blue-600 font-bold mb-8 uppercase tracking-widest text-sm">
            {car.type}
          </p>

          {/* Main Image */}
          <div className="mb-6 bg-slate-100 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={car.images[selectedImage]}
              alt="Vehicle"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mb-12">
            {car.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`flex-1 h-20 overflow-hidden rounded ${selectedImage === i ? "ring-2 ring-black" : "opacity-50"}`}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden mb-12">
            {car.specs.map((spec, i) => (
              <div key={i} className="bg-white p-6">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">
                  {spec.label}
                </p>
                <p className="text-lg font-bold uppercase italic">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Standard Amenities
            </h2>
            <div className="flex flex-wrap gap-2">
              {car.features.map((f, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-100 text-[11px] font-bold uppercase rounded"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Checkout Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50 p-8 rounded-3xl sticky top-12 border border-slate-100">
            <div className="mb-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                Rental Rate
              </p>
              <h2 className="text-4xl font-black italic">
                ${car.price}
                <span className="text-lg font-normal not-italic text-slate-400">
                  {" "}
                  / Day
                </span>
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              {/* <div className="group">
                <label className="text-[10px] font-black uppercase tracking-tighter text-slate-500">
                  Pick-up Date
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-2 outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-tighter text-slate-500">
                  Return Date
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-2 outline-none focus:border-black transition-colors"
                />
              </div> */}
              <RangeCalendar range={range} onChange={setRange} />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 mb-8">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span className="text-slate-400">
                  {currency(car.price)} × {days} {days === 1 ? "day" : "days"}
                </span>
                <span>{currency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase">
                <span className="text-slate-400">Tax & Fees</span>
                <span>{currency(taxes)}</span>
              </div>
              <div className="flex justify-between text-lg font-black uppercase italic pt-3 border-t">
                <span>Total</span>
                <span>{currency(total)}</span>
              </div>
              {days === 0 && (
                <p className="text-[10px] font-bold text-slate-400 normal-case tracking-normal pt-1">
                  Select a pick-up and return date to see your total.
                </p>
              )}
            </div>

            {!user ? (
              <button
                className="w-full bg-blue-600 text-white py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl active:translate-y-0"
                onClick={() => navigate("/login")}
              >
                Log in to book
              </button>
            ) : (
              <button
                disabled={days === 0}
                className="w-full bg-blue-600 text-white py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-blue-600"
              >
                Complete Reservation
              </button>
            )}

            <p className="mt-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Verified Rental • Rating: {car.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetils;
