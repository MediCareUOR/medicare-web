import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Shared Tailwind CSS classes
const cardClasses = "bg-card p-4 mx-8 rounded shadow-lg";
const textClasses = "text-muted-foreground";

const MediCare = () => {
  return (
    <div className="container mx-auto min-h-screen text-x1">
      <Header />
      <h2 className="text-3xl font-semibold text-primary my-8 text-center">
        Have any Questions?
      </h2>
      <div className="space-y-6">
        <div className={cardClasses}>
          <h3 className="font-semibold text-lg">What is MediCare?</h3>
          <p className={textClasses}>
            MediCare is an online platform that helps you find nearby pharmacies
            with the specific medication you need. Our service saves you time by
            providing real-time availability and location information, ensuring
            you can quickly and easily access your medicine.
          </p>
        </div>
        <div className={cardClasses}>
          <h3 className="font-semibold text-lg">How does MediCare work?</h3>
          <p className={textClasses}>
            Simply enter the name of the medication you’re looking for into our
            search bar, and MediCare will show you a list of nearby pharmacies
            that have it in stock.
          </p>
        </div>
        <div className={cardClasses}>
          <h3 className="font-semibold text-lg">Is MediCare free to use?</h3>
          <p className={textClasses}>
            Yes, MediCare is completely free for users. Our goal is to make
            accessing medication as easy as possible for everyone.
          </p>
        </div>
        <div className={cardClasses}>
          <h3 className="font-semibold text-lg">
            How accurate is the availability information?
          </h3>
          <p className={textClasses}>
            We work closely with participating pharmacies to ensure our data is
            as accurate and up-to-date as possible. However, availability can
            change quickly, so we recommend calling the pharmacy to confirm
            before visiting.
          </p>
        </div>
        <div className={cardClasses}>
          <h3 className="font-semibold text-lg">
            How do I report an issue or suggest a new feature?
          </h3>
          <p className={textClasses}>
            We value your feedback! If you encounter any issues or have
            suggestions, please reach out to us via our Contact Us page.
          </p>
        </div>
        <div className={cardClasses}>
          <h3 className="font-semibold text-lg">
            How do I add my pharmacy to MediCare?
          </h3>
          <p className={textClasses}>
            If you’re a pharmacy owner and would like to be listed on MediCare,
            please contact us at business@pharmalocate.com for more information
            on how to join our network.
          </p>
        </div>
      </div>
      <div className="m-8 text-center text-muted-foreground">
        <p>
          If you have any other questions, don’t hesitate to reach out to our
          support team through our{" "}
          <a href="/contact-us" className="text-primary underline">
            Contact Us
          </a>{" "}
          page!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MediCare;
