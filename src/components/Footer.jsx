import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">C</span>
                </div>
                CarRental
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                The world's largest car sharing marketplace. Find the perfect
                vehicle for your next adventure, or earn money by sharing your
                own.
              </p>
              <div className="flex gap-4 mt-2">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-400 cursor-pointer transition-colors">
                  𝕏
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-400 cursor-pointer transition-colors">
                  IG
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-400 cursor-pointer transition-colors">
                  FB
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Book a Car
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Electric Vehicles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Luxury & Exotic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Trucks & Vans
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Hosting</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    List your car
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Insurance & Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Host Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex gap-6">
              <span>© 2026 VeloDrive Inc.</span>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
