import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/photos/logo.jpg";
import JoinNow from "./Buttons";
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "FIND ROOMIE", to: "/roomie" },
    { name: "FIND ROOMS", to: "/rooms" },
    { name: "DISCOVER", to: "/discover" },
    { name: "HOW IT WORKS", to: "/" },

  ];

  return (
    <nav className="bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <img src={Logo} alt="Roomie website logo" className="h-10 w-auto" />
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-gray-700 hover:text-gray-600 left-9 capitalize">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3">
         <div className="cursor-pointer text-gray-700 hover:text-gray-600 flex items-center gap-2">
          <i className="fas fa-lock-open"></i>
          LOGIN
        </div>

          <JoinNow />
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 hover:text-[#FACC15] focus:outline-none ml-2">
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="block text-gray-700 hover:text-gray-600 capitalize">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
