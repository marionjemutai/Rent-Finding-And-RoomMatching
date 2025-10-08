import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#6c757d] text-gray-300 border-t border-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
            RoomMatch
          </h2>
          <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
            Connecting like-minded roommates through technology and smart design.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-white transition-colors">
                Find a Room
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect with Us
          </h3>
          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-400 text-xl transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-400 text-xl transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-400 text-xl transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:info@roommatch.com"
              className="hover:text-white text-gray-400 text-xl transition-all"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} RoomMatch. Built by Developers, for Developers.
      </div>
    </footer>
  );
}
