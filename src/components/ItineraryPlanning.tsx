import React, { memo } from 'react';
import { MessageCircleIcon, SunIcon, AnchorIcon } from 'lucide-react';
export const ItineraryPlanning = () => {
  return <section className="py-16 px-4 bg-white/95">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Custom Itinerary Planning
            </h2>
            <p className="text-gray-600 mb-6">
              Enhance your stay with our personalized experiences designed to
              showcase the best of Kilifi. From traditional dhow rides along the
              creek to intimate beach dinners under the stars, we create
              memorable moments tailored to your preferences.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-2 rounded-full">
                  <AnchorIcon className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Traditional Dhow Rides
                  </h3>
                  <p className="text-gray-600">
                    Experience the magic of Kilifi Creek on a traditional wooden
                    sailing vessel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <SunIcon className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Beach Dinners & Experiences
                  </h3>
                  <p className="text-gray-600">
                    Romantic candlelit dinners on the beach with personalized
                    menus and service.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <MessageCircleIcon className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Local Tours & Cultural Experiences
                  </h3>
                  <p className="text-gray-600">
                    Discover local culture, markets, and hidden gems with our
                    expert guides.
                  </p>
                </div>
              </div>
            </div>
            <a href="https://wa.me/254715372672" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              <MessageCircleIcon className="h-5 w-5" />
              Contact on WhatsApp
            </a>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Dhow sailing in Kilifi Creek" className="rounded-lg shadow-xl w-full h-[400px] object-cover" />
              <div className="absolute -bottom-5 -left-5 hidden md:block">
                <img src="https://images.unsplash.com/photo-1517686668014-1740ede3b963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Beach dinner setup" className="rounded-lg shadow-lg w-48 h-48 object-cover border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};