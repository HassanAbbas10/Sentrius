import React from 'react'
import { steps } from '../../../utils/features'
import { motion } from 'framer-motion'

const HowItWorks:React.FC = () => {
  return (
    <section className="bg-background-primary py-24 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-background-primary opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-normal font-sans text-text-primary sm:text-4xl text-center mb-16 relative">
          How It Works
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-text-accent"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="bg-background-secondary rounded-full p-4 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <step.icon className="w-8 h-8 text-white transition-transform group-hover:rotate-12" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 bg-text-accent/20 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              </div>
              <h3 className="text-xl font-semibold font-mono italic text-text-accent mb-2 relative">
                
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-text-primary font-inter font-semibold max-w-[300px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-text-accent to-transparent"></div>
    </section>
  )
}

export default HowItWorks