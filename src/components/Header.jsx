import React, { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp, IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LoginComponent = ({ user }) => {
  return (
    <div className="flex flex-row items-center">
      <FaCircleUser size={20} />
      <p className="ml-2">{user ? "Logout" : "Login"}</p>
    </div>
  );
};

const SearchComponent = () => {
  return (
    <div className="flex flex-row items-center">
      <IoSearchCircleSharp size={28} />
      <p className="ml-2">Search</p>
    </div>
  );
};

const NAV_LINKS = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Contact Us", url: "/contact-us" },
  { text: "FAQ", url: "/faq" },
];

const HEADER_CLASSES =
  "bg-background bg-x1 rounded-full mt-4 ml-4 mr-4 mb-2 text-white p-1 flex items-center justify-between";
const LINK_CLASSES =
  "bg-x2 text-muted-foreground px-4 py-2 hover:bg-x3 rounded-3xl transition duration-200";
const MOBILE_MENU_CLASSES = "md:hidden z-10 bg-x1 rounded-3xl mr-4 ml-4";
const MENU_ITEM_CLASSES =
  "block px-4 py-2 bg-x2 text-white rounded-3xl ml-6 mr-6 mt-3 items-center hover:bg-x3 transition duration-200";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(sessionStorage.getItem("email"));
  });

  const handleLogOut = () => {
    if (user != null) {
      sessionStorage.clear();
    }
    navigate("/login");
  };

  return (
    <div className={HEADER_CLASSES}>
      <div className="flex items-center">
        <img
          aria-hidden="true"
          alt="logo"
          src="/images/logo2.png"
          className="ml-2 w-50 h-8"
        />
      </div>
      <div className="flex space-x-4 hidden md:flex">
        {NAV_LINKS.map((link, index) => (
          <a key={index} href={link.url} className={LINK_CLASSES}>
            {link.text}
          </a>
        ))}
        {sessionStorage.getItem("role") === "ROLE_USER" && (
          <a href="/search" className={LINK_CLASSES}>
            <SearchComponent />
          </a>
        )}
        {sessionStorage.getItem("role") === "ROLE_ADMIN" && (
          <a href="/search" className={LINK_CLASSES}>
            <SearchComponent />
          </a>
        )}
        <a onClick={handleLogOut} className={LINK_CLASSES}>
          <LoginComponent user={user} />
        </a>
      </div>
      <div className={`${MOBILE_MENU_CLASSES}`}>
        <div x-data={{ open: false }}>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center text-primary focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <IoCloseSharp size={28} />
            ) : (
              <RiMenu5Fill size={28} />
            )}
          </button>
          {isMobileMenuOpen && (
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="absolute right-0 mt-2 w-44 bg-x2 bg-opacity-20 text-white rounded-3xl items-center mr-4 shadow-lg py-2"
            >
              {NAV_LINKS.map((link, index) => (
                <a key={index} href={link.url} className={MENU_ITEM_CLASSES}>
                  {link.text}
                </a>
              ))}
              {sessionStorage.getItem("role") === "ROLE_USER" && (
                <a href="/search" className={MENU_ITEM_CLASSES}>
                  <SearchComponent />
                </a>
              )}
              {sessionStorage.getItem("role") === "ROLE_ADMIN" && (
                <a href="/search" className={MENU_ITEM_CLASSES}>
                  <SearchComponent />
                </a>
              )}
              <a onClick={handleLogOut} className={MENU_ITEM_CLASSES}>
                <LoginComponent user={user} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
