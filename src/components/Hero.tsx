import React from 'react';
export const Hero = () => {
  return <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-cyan-100 mb-4 tracking-wide" style={{
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
          Welcome to KELIAN HOMES
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Explore a world of luxury and serenity with us.
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
          Explore Properties
        </button>
      </div>
    </div>;
};