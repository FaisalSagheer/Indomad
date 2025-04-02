import React from 'react';
import { FiCheckCircle, FiAward, FiShield, FiTruck, FiHeadphones, FiDollarSign } from 'react-icons/fi';

const ChooseUs = () => {
  const features = [
    {
      icon: <FiAward className="w-8 h-8 text-blue-600" />,
      title: "Industry Experience",
      description: "With over 25 years in the fastener industry, we bring unmatched expertise to every project."
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "All our products undergo rigorous quality checks to meet international standards."
    },
    {
      icon: <FiShield className="w-8 h-8 text-blue-600" />,
      title: "Certified Products",
      description: "Our fasteners are ISO 9001 certified and comply with DIN, ANSI, and other global standards."
    },
    {
      icon: <FiTruck className="w-8 h-8 text-blue-600" />,
      title: "Reliable Delivery",
      description: "Just-in-time delivery system ensures you get products when you need them."
    },
    {
      icon: <FiDollarSign className="w-8 h-8 text-blue-600" />,
      title: "Competitive Pricing",
      description: "Direct manufacturer relationships allow us to offer the best prices without compromising quality."
    },
    {
      icon: <FiHeadphones className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Our technical team is always available to assist with product selection and application advice."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our commitment to quality, service, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Value Propositions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <p className="mb-6">
              We specialize in manufacturing custom fasteners tailored to your specific requirements and technical drawings.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded font-medium hover:bg-gray-100">
              Request Custom Quote
            </button>
          </div>

          <div className="bg-gray-800 text-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Bulk Order Discounts</h3>
            <p className="mb-6">
              Enjoy special pricing and additional benefits when you place large quantity orders with us.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700">
              Enquire About Bulk Orders
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;