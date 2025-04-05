import React from 'react';
export const FeaturedRentals = () => {
  const rentals = [{
    id: 1,
    name: 'Casa Baobab',
    description: 'Luxurious villa with private pool, tropical garden, and serene veranda. Features modern amenities, outdoor lounging areas, and beautiful landscaping.',
    rate: 'From Ksh 35,000/night',
    images: ["/1000062092.jpg", "/1000062093.jpg", "/1000062097.jpg"]
  }, {
    id: 2,
    name: 'Ocean View Villa',
    description: 'Luxurious 4-bedroom villa with panoramic ocean views and private pool.',
    rate: 'From Ksh 25,000/night',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }, {
    id: 3,
    name: 'Tropical Garden Cottage',
    description: 'Cozy 2-bedroom cottage surrounded by lush tropical gardens.',
    rate: 'From Ksh 8,000/night',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }];
  return <section className="py-16 px-4 bg-amber-50/90">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Rentals
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our handpicked selection of luxury vacation homes in the
          beautiful coastal town of Kilifi.
        </p>
        {/* Featured Property - Casa Baobab */}
        <div className="mb-16">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-sky-800">Casa Baobab</h3>
                <p className="text-gray-600">
                  Experience the perfect blend of luxury and nature at Casa
                  Baobab. This stunning villa features:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Private swimming pool with lounging area</li>
                  <li>Spacious veranda with comfortable seating</li>
                  <li>Lush tropical garden setting</li>
                  <li>Modern, well-appointed rooms</li>
                  <li>Outdoor dining space</li>
                </ul>
                <p className="text-xl font-semibold text-emerald-600">
                  From Ksh 35,000/night
                </p>
                <button className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white py-3 px-8 rounded-lg transition duration-300">
                  View Details
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {rentals[0].images.map((image, index) => <div key={index} className={`rounded-lg overflow-hidden ${index === 2 ? 'col-span-2' : ''}`}>
                    <img src={image} alt={`Casa Baobab view ${index + 1}`} className="w-full h-full object-cover" />
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        {/* Other Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rentals.slice(1).map(rental => <div key={rental.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img src={rental.image} alt={rental.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{rental.name}</h3>
                <p className="text-gray-600 mb-4">{rental.description}</p>
                <p className="text-emerald-600 font-semibold">{rental.rate}</p>
              </div>
              <div className="px-6 pb-4">
                <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md transition duration-300">
                  View Details
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};