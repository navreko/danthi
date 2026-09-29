import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import NearbyPlaces from "./pages/NearbyPlaces";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/nearby-places" element={<NearbyPlaces />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}