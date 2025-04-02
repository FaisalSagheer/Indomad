import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '#about' },
    { name: 'Products', link: '#products' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' }
  ];

  const productCategories = [
    { name: 'Bolts', link: '#' },
    { name: 'Nuts', link: '#' },
    { name: 'Washers', link: '#' },
    { name: 'Screws', link: '#' },
    { name: 'Anchors', link: '#' },
    { name: 'Special Fasteners', link: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">FASTENER CO.</h3>
            <p className="text-gray-400 mb-6">
              Leading manufacturer and supplier of high-quality industrial fasteners since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Product Categories</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a href={category.link} className="text-gray-400 hover:text-white transition-colors">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get updates on new products and offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fastener Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;