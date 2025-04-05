import React from 'react';
import { MessageCircleIcon, MailIcon, InstagramIcon } from 'lucide-react';
export const Contact = () => {
  return <section className="py-16 px-4 bg-white/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to book your stay? Reach out to us through
            any of the channels below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a href="https://wa.me/254715372672" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-amber-50 rounded-lg hover:bg-amber-100 transition duration-300">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <MessageCircleIcon className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-center">+254 715 372 672</p>
          </a>
          <a href="mailto:kelianhomeske@gmail.com" className="flex flex-col items-center p-8 bg-sky-50 rounded-lg hover:bg-sky-100 transition duration-300">
            <div className="bg-sky-100 p-4 rounded-full mb-4">
              <MailIcon className="h-10 w-10 text-sky-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-center">kelianhomeske@gmail.com</p>
          </a>
          <a href="https://instagram.com/kelianhomes" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <InstagramIcon className="h-10 w-10 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-gray-600 text-center">@kelianhomes</p>
          </a>
        </div>
      </div>
    </section>;
};