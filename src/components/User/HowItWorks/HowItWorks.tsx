import React from 'react'
import { steps } from '../../../utils/features'
const HowItWorks:React.FC = () => {
  return (
    <section className="bg-background-primary py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-background-secondary rounded-full p-4 mb-4">
                <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-text-accent mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-text-primary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks