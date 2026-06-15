// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#certifications" className="hover:text-gray-400">Certifications</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Get In Touch</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black px-4 py-2 space-y-2">
          <li><a href="#about" className="block hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="block hover:text-gray-400">Skills</a></li>
          <li><a href="#experience" className="block hover:text-gray-400">Experience</a></li>
          <li><a href="#projects" className="block hover:text-gray-400">Projects</a></li>
          <li><a href="#certifications" className="block hover:text-gray-400">Certifications</a></li>
          <li><a href="#contact" className="block hover:text-gray-400">Get In Touch</a></li>
        </ul>
      )}
    </nav>
  );
}
