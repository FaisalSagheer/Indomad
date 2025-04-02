import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* About Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="About Our Company" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* About Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-6">
              Established in 1995, Fastener Co. has been a trusted name in the industrial fastener industry. We specialize in manufacturing and supplying high-quality fasteners for various applications across multiple industries.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, high-quality fastening solutions that meet the diverse needs of our clients while maintaining the highest standards of service and integrity.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the preferred fastener supplier globally by continuously innovating and exceeding customer expectations.
              </p>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;