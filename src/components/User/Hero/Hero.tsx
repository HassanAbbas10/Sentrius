import React from "react";
import Img from "../../common/Img";
import CyberButton from "../../common/CyberButton";
const Hero: React.FC = () => {
  return (
    <div>
      <main className="bg-background-secondary min-h-96">
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Cybersecurity"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-800/50 to-gray-900/20"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-2xl px-4 font-mono font-light italic">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
              Protect Your Digital World with <span className="text-blue-main">Sentrius</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Stay safe online with personalized security recommendations, phishing detection, and gamified learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CyberButton>Get Started</CyberButton>
              <button className="bg-transparent border-2 border-border-highlight text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-white hover:text-black duration-300 transition focus:outline-none">
                Learn More
              </button>
            </div>
          </div>

          <div className="absolute top-12 left-12 w-32 h-32 bg-blue-light opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-main opacity-30 rounded-full blur-3xl"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
