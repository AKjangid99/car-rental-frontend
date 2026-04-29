import React, { useState } from "react";

const ManageRequests = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  const tabs = ["Pending", "Confirmed", "Completed", "Cancelled"];

  const requests = [
    {
      id: "BK-102",
      car: "Tesla Model 3",
      renter: "Sarah Jenkins",
      dates: "Oct 12 - Oct 15",
      payout: 320,
      status: "Pending",
      img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "BK-105",
      car: "Porsche Taycan",
      renter: "Michael Chen",
      dates: "Oct 18 - Oct 20",
      payout: 540,
      status: "Confirmed",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "BK-098",
      car: "Tesla Model 3",
      renter: "Emma Wilson",
      dates: "Oct 01 - Oct 04",
      payout: 320,
      status: "Completed",
      img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=150",
    },
  ];

  const filteredRequests = requests.filter((req) => req.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Requests</h1>
          {/* <p className="text-gray-500 mt-1">
            Track and manage your vehicle bookings.
          </p> */}
        </header>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-6 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((req) => (
              <div
                key={req.id}
                className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Car & ID */}
                  <div className="flex items-center gap-4">
                    <img
                      src={req.img}
                      alt={req.car}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{req.car}</h3>
                      <p className="text-xs text-gray-400 uppercase font-mono tracking-tighter">
                        Request {req.id}
                      </p>
                    </div>
                  </div>

                  {/* Center: Details */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 md:ml-12">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                        Renter
                      </p>
                      <p className="text-sm font-medium">{req.renter}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                        Trip Dates
                      </p>
                      <p className="text-sm font-medium">{req.dates}</p>
                    </div>
                    <div className="hidden md:block text-right">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                        Estimated Payout
                      </p>
                      <p className="text-sm font-bold text-emerald-600">
                        ${req.payout}.00
                      </p>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-gray-50">
                    {activeTab === "Pending" ? (
                      <>
                        <button className="flex-1 md:flex-none px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors">
                          Approve
                        </button>
                        <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-lg hover:bg-gray-50">
                          Decline
                        </button>
                      </>
                    ) : activeTab == "Confirmed" ? (
                      <>
                        <button className="w-full md:w-auto px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">
                          View Details
                        </button>

                        <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-lg hover:bg-gray-50">
                          Message
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="w-full md:w-auto px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">
                          View Details
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
              <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-gray-500 font-medium">
                No {activeTab.toLowerCase()} requests found
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageRequests;
