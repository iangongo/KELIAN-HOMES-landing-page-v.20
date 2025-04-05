import React from 'react';
import { HomeIcon, MessageSquareIcon, CalendarIcon } from 'lucide-react';
export const PropertyManagement = () => {
  return <section className="py-16 px-4 bg-sky-50/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Property Management
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Own a vacation home in Kilifi? Let our experienced team handle every
            aspect of your property management, from bookings and guest
            communication to maintenance and cleaning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-sky-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <CalendarIcon className="h-8 w-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Booking Management</h3>
            <p className="text-gray-600">
              We handle all aspects of the booking process, from inquiries to
              confirmations, ensuring maximum occupancy and revenue for your
              property.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-sky-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <MessageSquareIcon className="h-8 w-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Guest Communication</h3>
            <p className="text-gray-600">
              Our team provides prompt, professional communication with guests
              before, during, and after their stay to ensure satisfaction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-sky-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <div className="h-8 w-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Cleaning & Maintenance
            </h3>
            <p className="text-gray-600">
              We coordinate regular cleaning, maintenance, and inspections to
              keep your property in pristine condition year-round.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 mt-12 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to simplify your property management?
              </h3>
              <p className="text-gray-600">
                Contact us today to learn more about our comprehensive property
                management services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:kelianhomeske@gmail.com" className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
                Email Us
              </a>
              <a href="https://wa.me/254715372672" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};