import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LandingPage from "./LandingPage";
import ListingPage from "../user/ListingPage";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<ListingPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Home;
