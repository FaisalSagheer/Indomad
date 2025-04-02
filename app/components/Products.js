import React from 'react';

const products = [
  {
    id: 1,
    name: 'Hex Bolts',
    description: 'High tensile hex bolts for heavy-duty applications',
    image: 'https://images.unsplash.com/photo-1581093057305-25a1a4f56c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Nuts',
    description: 'Various types of nuts including hex nuts, lock nuts',
    image: 'https://images.unsplash.com/photo-1581093057923-38589b328ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Washers',
    description: 'Flat washers, spring washers for different applications',
    image: 'https://images.unsplash.com/photo-1581092918710-5d61d7c2b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Screws',
    description: 'Machine screws, self-tapping screws, wood screws',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Anchors',
    description: 'Wedge anchors, sleeve anchors for concrete applications',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a9d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    name: 'Special Fasteners',
    description: 'Custom fasteners designed for specific applications',
    image: 'https://images.unsplash.com/photo-1581093057305-25a1a4f56c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of high-quality fasteners for various industrial applications. Our products meet international quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;