import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Process from "../components/home/Process";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}