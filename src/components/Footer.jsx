import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-x1  text-white px-4 py-2 rounded-t-3xl mx-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="flex space-x-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact-us" className="hover:underline">
            Contact Us
          </a>
          <a href="/faq" className="hover:underline">
            FAQ
          </a>
        </nav>
        <div className="flex space-x-4 mt-2 md:mt-0 mx-auto">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a href="https://x.com/" target="_blank" aria-label="X">
            <FaXTwitter size={20} />
          </a>
        </div>
        <hr className="h-2" />
        <p className="text-center text-muted-foreground flex justify-end">
          MediCare © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
