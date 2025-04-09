import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pb-[56.25%] overflow-hidden">
        {/* <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/fallback.jpg" // Add a fallback image
        >
          <source 
            src="https://youtu.be/f7qkHxG1v1E" 
            type="video" 
          />
          <source 
            src="/videos/fasteners.webm" 
            type="video/webm" 
          />
          Your browser does not support video.
        </video> */}
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src="https://www.youtube.com/embed/f7qkHxG1v1E?autoplay=1&mute=1&loop=1&playlist=f7qkHxG1v1E"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
            Premium quality<span className='text-blue-700'> solutions</span> for industrial applications
            </h1>
            <p className="text-xl mb-8">
              For various industries including construction, automotive, and manufacturing.
            </p>
            {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-600 font-medium">
                Explore Products
              </button>
              <button className="bg-white text-blue-700 px-6 py-3 rounded hover:bg-gray-100 font-medium">
                Request Catalog
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      {/* <div className="relative z-10">
        <div className="container mx-auto px-4 -mt-16">
          <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">25+</h3>
              <p className="text-black">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">500+</h3>
              <p className="text-black">Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">1000+</h3>
              <p className="text-black">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">24/7</h3>
              <p className="text-black">Customer Support</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;