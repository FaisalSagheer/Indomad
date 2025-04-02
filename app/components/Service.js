import React from 'react';

const services = [
  {
    title: "Custom Manufacturing",
    description: "We manufacture fasteners according to your specific requirements and drawings.",
    icon: "⚙️"
  },
  {
    title: "Bulk Supply",
    description: "Reliable bulk supply of standard fasteners for large-scale projects.",
    icon: "📦"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks to ensure all products meet international standards.",
    icon: "🔍"
  },
  {
    title: "Technical Support",
    description: "Expert advice on fastener selection and application from our technical team.",
    icon: "🛠️"
  },
  {
    title: "Just-In-Time Delivery",
    description: "Efficient logistics for timely delivery to keep your projects on schedule.",
    icon: "🚚"
  },
  {
    title: "After-Sales Service",
    description: "Comprehensive after-sales support to address any concerns post-purchase.",
    icon: "📞"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond supplying quality fasteners, we offer comprehensive services to support your projects from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;