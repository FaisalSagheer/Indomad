'use client'

import React, { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({contactRef}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // const contactRef = useRef(null)
  // const scrollToSection = () => {
  //   let element = contactRef.current;
  //   if (element) {
  //     element.scrollInToView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     })
  //   }
  // }

  const scrollToSection = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className="bg-white shadow-md">

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a className="text-2xl font-bold text-gray-800">
              <img src='HeaderLogo.png' alt='IndoNAD' className='h-14 w-68' />
            </a>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">About</a>
            <a href="#products" className="text-gray-800 hover:text-blue-600 font-medium">Products</a>
            <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium">Why Choose Us?</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
          </nav> */}

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div> */}

          {/* Cart and Search */}
          <div className=" md:flex items-center space-x-4">
            {/* <button className="text-gray-800 hover:text-blue-600">
              <FiShoppingCart size={20} />
            </button> */}
            <button onClick={scrollToSection}  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">About</a>
              <a href="#products" className="text-gray-800 hover:text-blue-600 font-medium">Products</a>
              <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium">Why Choose Us?</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
              <div className="flex items-center space-x-4 pt-4">
                {/* <button className="text-gray-800 hover:text-blue-600">
                  <FiShoppingCart size={20} />
                </button> */}
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;