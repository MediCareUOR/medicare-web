import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Statbar from "../components/statbar";

const ImageSection = () => {
  return (
    <section className="mb-12 mx-4 flex flex-col sm:flex-row items-center">
      <img
        aria-hidden="true"
        alt="medicine-image"
        src="/images/group.png"
        className="w-full sm:w-1/2 mb-6 sm:mb-0 ml-20 flex justify-center"
      />
      <div className="sm:pl-6 sm:w-2/3 max-w-sm mt-5 mx-4">
        <h2 className="text-primary text-3xl text-x1 font-semibold text-primary-foreground">
          Find Your Medicine, Find Your Pharmacy — Fast and Easy!
        </h2>
        <p className="text-muted-foreground text-x1 mt-2 ">
          To make healthcare accessible by connecting you with the medications
          you need, when and where you need them, through accurate and real-time
          information.
        </p>
      </div>
    </section>
  );
};

const Card = ({ imgSrc, altText, title, description, imgClass = "" }) => {
  return (
    <div className="bg-card px-4 mx-6 py-4 rounded-lg shadow-xl hover:ring-2 text-x1">
      <img aria-hidden="true" alt={altText} src={imgSrc} className={imgClass} />
      <h3 className="text-primary text-lg font-semibold mt-2 mb-2 flex justify-center">
        {title}
      </h3>
      <p className="text-muted-foreground text-center mb-2">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <ImageSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          imgSrc="/images/medisearch.png"
          altText="medication-search"
          title="Simplified Medication Search"
          description="MediCare streamlines the process of finding pharmacies with the medicine you need, saving you time and effort."
          imgClass="w-20 h-20 mx-auto mb-4"
        />
        <Card
          imgSrc="/images/med.png"
          altText="real-time-availability"
          title="Real-Time Availability"
          description="Our platform provides up-to-date information on medication availability at nearby pharmacies, ensuring you can quickly locate what you need."
          imgClass="w-20 h-20 mx-auto mb-4"
        />
        <Card
          imgSrc="/images/location.png"
          altText="effortless-access"
          title="Effortless Access"
          description="Whether it's prescription or over-the-counter medicine, MediCare is designed to make your search easy and efficient."
          imgClass="w-20 h-20 mx-auto mb-4"
        />
      </div>
      <Statbar />
      <Footer />
    </div>
  );
};

export default About;
