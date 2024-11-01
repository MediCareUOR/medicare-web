import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdCall } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col rounded-3xl mx-4 items-center bg-background text-foreground">
        <div className="text-center px-8 pt-60 mt-2 h-screen w-full rounded-3xl bg-center bg-cover bg-no-repeat bg-contact">
          <h1 className="text-5xl text-x1 font-semibold">Contact Us</h1>
          <br />
          <p className="mt-4 font-semibold text-2xl flex items-center lg:mx-72 text-center text-x1 text-muted-foreground ">
            Got questions or need help? Our support team is ready to assist you
            with any inquiries about our platform or pharmacy locations. We're
            committed to providing quick and reliable solutions to make your
            experience with MediCare as smooth as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8  ">
          <ContactCard
            Icon={RiCustomerService2Fill}
            title="Customer Support"
            email="support@medicare.com"
            phone="0112-896 963"
          />

          <ContactCard
            Icon={MdCall}
            title="Business Inquiries"
            email="business@medicare.com"
            phone="0112-896 964"
          />
          <ContactCard
            Icon={FaAddressCard}
            title="Mailing Address"
            address="Medicare Headquarters, 123 Janaraja St., Wellamadama, Matara"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ContactCard = ({ Icon, title, email, phone, address }) => {
  return (
    <div
      className="bg-card border-x2 border-2 p-4 rounded-lg shadow max-w-sm m-5 text-center text-x1 
    h-60 md:min-h-72 md:min-w-52 hover:ring-2 "
    >
      <div className="flex justify-center mb-8 mt-8">
        <Icon color="#163A5F" aria-hidden="true" className="w-10 h-10 " />
      </div>
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
