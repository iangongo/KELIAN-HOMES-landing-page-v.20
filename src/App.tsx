import React from 'react';
import { Hero } from './components/Hero';
import { FeaturedRentals } from './components/FeaturedRentals';
import { ItineraryPlanning } from './components/ItineraryPlanning';
import { PropertyManagement } from './components/PropertyManagement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen font-sans relative" style={{
    background: `
          linear-gradient(
            to bottom,
            rgba(224, 242, 254, 0.8),
            rgba(186, 230, 253, 0.8)
          ),
          url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')
        `,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="relative">
        <Hero />
        <div className="backdrop-blur-sm">
          <FeaturedRentals />
          <ItineraryPlanning />
          <PropertyManagement />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>;
}