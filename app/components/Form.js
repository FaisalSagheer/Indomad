import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiUser } from 'react-icons/fi';

const Form = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need a quote? Get in touch with our team today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
              <div className="flex items-start">
                  <div className="text-blue-700 mt-1 mr-4">
                    <FiUser size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">CEO</h4>
                    <p className="text-gray-600">
                    Warren Kane 
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-700 mt-1 mr-4">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      B2X Online, Inc.
                      30 Mill Lane
                      Salem, VA 24153
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-700 mt-1 mr-4">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">Office: 540-389-7924</p>
                    <p className="text-gray-600">Cell: 540-580-4212</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-700 mt-1 mr-4">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">sales@IndoNad.com</p>
                    <p className="text-gray-600">support@IndoNad.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-700 mt-1 mr-4">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 - 18:00</p>
                    <p className="text-gray-600">Saturday: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter subject"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-600 font-medium w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;