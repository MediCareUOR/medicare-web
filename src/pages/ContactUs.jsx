import React, { useState } from "react";

const sharedClasses = {
  primaryColor: "bg-primary",
  primaryTextColor: "text-primary-foreground",
  secondaryColor: "bg-secondary",
  secondaryTextColor: "text-secondary-foreground",
  cardBackground: "bg-card",
  cardShadow: "shadow",
};

const ContactUs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-background text-foreground">
      <header
        className={`flex justify-between rounded-full mt-4 ml-4 mr-4 mb-2 items-center text-white bg-x1 p-4 ${sharedClasses.primaryColor}`}
      >
        <div className="flex items-center">
          <img src="/images/logo2.png" alt="MediCare Logo" className="h-10" />
          <nav className="hidden md:flex space-x-6 ml-4">
            <a
              href="#"
              className={`${sharedClasses.primaryTextColor} hover:underline`}
            >
              Home
            </a>
            <a
              href="#"
              className={`${sharedClasses.primaryTextColor} hover:underline`}
            >
              About
            </a>
            <a
              href="#"
              className={`${sharedClasses.primaryTextColor} hover:underline`}
            >
              Contact Us
            </a>
            <a
              href="#"
              className={`${sharedClasses.primaryTextColor} hover:underline`}
            >
              FAQ
            </a>
          </nav>
        </div>
        <div className="hidden md:block">
          <a
            href="#"
            className={`${sharedClasses.secondaryColor} ${sharedClasses.secondaryTextColor} px-4 py-2 rounded`}
          >
            Login
          </a>
        </div>
        <button
          id="mobile-menu-button"
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className={sharedClasses.primaryTextColor}>☰</span>
        </button>
      </header>
      <div
        id="mobile-menu"
        className={
          isMobileMenuOpen
            ? `md:hidden ${sharedClasses.primaryColor}`
            : "hidden md:hidden"
        }
      >
        <nav className="flex flex-col rounded-3xl mr-4 ml-4 text-white bg-x1 p-4">
          <a
            href="#"
            className={`${sharedClasses.primaryTextColor} hover:underline`}
          >
            Home
          </a>
          <a
            href="#"
            className={`${sharedClasses.primaryTextColor} hover:underline`}
          >
            About
          </a>
          <a
            href="#"
            className={`${sharedClasses.primaryTextColor} hover:underline`}
          >
            Contact Us
          </a>
          <a
            href="#"
            className={`${sharedClasses.primaryTextColor} hover:underline`}
          >
            FAQ
          </a>
          <a
            href="#"
            className={`${sharedClasses.secondaryColor} ${sharedClasses.secondaryTextColor} px-4 py-2 rounded`}
          >
            Login
          </a>
        </nav>
      </div>
      <div className="text-center p-8 h-screen w-10/12 bg-center bg-cover bg-no-repeat bg-contact ">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-muted-foreground">
          We’re here to help! Whether you have questions, need assistance, or
          want to provide feedback, our team at MediCare is ready to assist you.
        </p>
      </div>
      <div className="grid border-x1 grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <ContactCard
          title="Customer Support"
          email="support@medicare.com"
          phone="0112-896 963"
        />
        <ContactCard
          title="Business Inquiries"
          email="business@medicare.com"
          phone="0112-896 964"
        />
        <ContactCard
          title="Mailing Address"
          address="Medicare Headquarters, 123 Janaraja St., Wellamadama, Matara"
        />
      </div>
      <footer
        className={`flex justify-between items-center p-4 bg-x1 ${sharedClasses.primaryColor}`}
      >
        <div className="flex space-x-4">
          <a
            href="#"
            className={`${sharedClasses.primaryTextColor} hover:underline`}
          >
            About
          </a>
          <a
            href="#"
            className={`${sharedClasses.primaryTextColor} hover:underline`}
          >
            Contact Us
          </a>
          <a
            href="#"
            className={`${sharedClasses.primaryTextColor} hover:underline`}
          >
            FAQ
          </a>
        </div>
        <p className="text-muted-foreground">MediCare © 2024</p>
      </footer>
    </div>
  );
};

const ContactCard = ({ title, email, phone, address }) => {
  return (
    <div
      className={`${sharedClasses.cardBackground} p-4 rounded-lg ${sharedClasses.cardShadow}`}
    >
      <h2 className="font-semibold">{title}</h2>
      {email && (
        <p>
          Email:{" "}
          <a href={`mailto:${email}`} className="text-primary hover:underline">
            {email}
          </a>
        </p>
      )}
      {phone && <p>Phone: {phone}</p>}
      {address && <p>{address}</p>}
    </div>
  );
};

export default ContactUs;
