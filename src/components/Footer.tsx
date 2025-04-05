import React from 'react';
import { MessageCircleIcon, MailIcon, InstagramIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-sky-900/95 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">KELIAN HOMES</h2>
            <p className="text-sky-200">
              Luxury Vacation Rentals in Kilifi, Kenya
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://wa.me/254715372672" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition duration-300">
              <MessageCircleIcon className="h-5 w-5" />
            </a>
            <a href="mailto:kelianhomeske@gmail.com" className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition duration-300">
              <MailIcon className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/kelianhomes" target="_blank" rel="noopener noreferrer" className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition duration-300">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-sky-800 pt-8 mt-8 text-center">
          <p className="text-sky-200">
            &copy; {new Date().getFullYear()} KELIAN HOMES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};