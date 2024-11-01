import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainContent = () => (
  <main className="sm:w-1/2 pl-8">
    <h2 className="text-x1 text-4xl font-semibold">Welcome to MediCare</h2>
    <p className="text-muted-foreground text-2xl mt-2 text-x1 font-semibold text-left">
      Find Your Medicine, Find Your Pharmacy—Fast and Easy!
    </p>
    <p className="text-muted-foreground text-x1 mt-4 mb-8">
      Your go-to platform for quickly finding pharmacies that have the medicine
      you need. With just a few clicks, locate the nearest pharmacy stocking
      your required medication, ensuring you get the treatment you need without
      the hassle.
    </p>
    <a
      href="/login"
      className="text-white font-semibold px-6 bg-x3 hover:bg-x3/80 mt-8 py-2 rounded-full"
    >
      Get Started
    </a>
  </main>
);

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex flex-col flex-grow sm:flex-row items-center bg-background p-4">
      <MainContent />
      <div className="sm:w-1/2 flex justify-center">
        <img
          src="/images/homepic.png"
          alt="Prescription and Medicine"
          className="max-h-[550px]  w-full h-auto object-contain"
        />
      </div>
    </div>
    <Footer className="mt-auto" />
  </div>
);

export default Home;
