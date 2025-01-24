import React from "react";
import { features } from "../../../utils/features";
import { BorderBeam } from "../../ui/border-beam";
const Features: React.FC = () => {
  return (
    <section className="bg-background-secondary py-8 sm:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal font-sans  text-text-primary sm:text-4xl text-center mb-12">
          Sentrius Core Features
        </h2>
        <div className="grid grid-cols-1 gap-y-28 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-tl-full rounded-bl-2xl rounded-tr-full  shadow-md p-6 flex flex-col items-center text-center 
                           transition-transform duration-300 ease-in-out transform hover:scale-105 
                           bg-background-primary/40 backdrop-blur-3xl border text-white 
                           border-spacing-3
                           border-black
                           hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] 
        "
            >
              <BorderBeam
                size={120}
                colorFrom="#00F5B4"
                colorTo="#005AC2"
                borderWidth={3}
                delay={500}
              />
              <div className="bg-background-tertiary rounded-full p-6 mb-4">
                <feature.icon
                  className="w-8 h-8 text-text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold font-mono italic text-text-accent mb-2">
                {feature.title}
              </h3>
              <p className="text-text-primary font-inter font-semibold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-text-accent to-transparent"></div>
    </section>
  );
};

export default Features;
