import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    company: 'ABC Constructions',
    content: 'We have been sourcing fasteners from Fastener Co. for over 5 years. Their product quality and delivery reliability are exceptional.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    company: 'XYZ Manufacturing',
    content: 'Their technical team helped us select the right fasteners for our specialized application. Great service and support!',
    rating: 4
  },
  {
    id: 3,
    name: 'Amit Kumar',
    company: 'DEF Engineering',
    content: 'Competitive pricing without compromising on quality. Our go-to supplier for all fastener needs.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies across various industries for our quality products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;