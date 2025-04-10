import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col md:flex-row ">
          {/* About Image */}
          <div className="mb-10 md:mb-0 md:pr-20">
            <img
              src="assets/about.jpg"
              alt="About Our Company"
              className="rounded-lg shadow-lg w-md"
            />
          </div>

          {/* About Content */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-black mb-10">About Our Company</h2>
            <p className="text-gray-600 mb-6 text-lg">
              {/* Established in 1995, Fastener Co. has been a trusted name in the industrial fastener industry. We specialize in manufacturing and supplying high-quality fasteners for various applications across multiple industries. */}


              In a world of manufacturing flaws and delays the answer is clear. IndoNAD is quickly becoming the most trusted name in the industrial fastener industry. We specialize in manufacturing and supplying high-quality fasteners and hardware to meet the most stringent demands for various applications across multiple industries. IndoNAD provides reliable, high-quality solutions that meet the diverse needs of our clients while maintaining the highest standards of service and integrity. We strive to be the preferred supplier globally by continuously innovating and exceeding our customer expectations. When the cost of delays matter, count on IndoNAD to deliver.
            </p>

            {/* <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, high-quality fastening solutions that meet the diverse needs of our clients while maintaining the highest standards of service and integrity.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the preferred fastener supplier globally by continuously innovating and exceeding customer expectations.
              </p>
            </div>

            <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 font-medium">
              Read More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;