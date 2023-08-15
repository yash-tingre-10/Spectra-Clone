import React, { useState } from 'react';

const logo = "https://wpspectra.com/wp-content/uploads/2022/08/spectra-logo-5.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-4 mx-5 my-5 mb-5 mt-0 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-9 w-auto w-25 m-0" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          className="text-black text-lg"
          onClick={toggleMenu}
        >
          {menuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Links (Mobile) */}
      {menuOpen && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-white m-2">
          <div className="flex flex-col items-start">
            {/* Mobile menu links */}
            <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Starter Templates</a>
            <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Spectra For</a>
            <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Features</a>
            <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Pro</a>
            <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Resources</a>
            <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Pricing</a>
            <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Get Started</a>
          </div>
        </div>
      )}

      {/* Links (Desktop) */}
      <div className=" hidden md:flex flex-col items-center md:items-start md:flex-row justify-center md:justify-end space-x-4">
        {/* Desktop links */}
        <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Starter Templates</a>
        <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Spectra For</a>
        <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Features</a>
        <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Pro</a>
        <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Resources</a>
        <a href="#" className="p-4 text-black text-lg hover:text-purple-800">Pricing</a>
        {/* Button on the right */}
        <button className="bg-blue-600 text-white py-3 px-3 hover:bg-blue-700">
        Get Started
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
