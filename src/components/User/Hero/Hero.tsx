import React from "react";
import Img from "../../common/Img";

const Hero: React.FC = () => {
  return (
    <div>
      <main className="bg-background-tertiary min-h-96">
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Cybersecurity"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Protect Your Digital World
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              Secure your data and systems with our cutting-edge cybersecurity
              solutions. Stay safe from threats and vulnerabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-dark text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-blue-hover hover:text-text-primary duration-300 focus:outline-none">
                Start Your Training
              </button>
              <button className="bg-transparent border-2 border-bordercol-highlight text-text-accent py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-white duration-300 hover:text-black transition">
                Features
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
