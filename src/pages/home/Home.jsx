import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LandingPage from "./LandingPage";
import ListingPage from "../user/ListingPage";
import { Routes, Route, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
