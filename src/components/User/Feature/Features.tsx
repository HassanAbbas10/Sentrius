import React from 'react'
import features from '../../../utils/features'
const Features:React.FC = () => {
  return (
   
        <section className="bg-background-primary py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-text-secondary sm:text-4xl text-center mb-12">Sentrius Core Features</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-background-tertiary rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700"
                >
                  <div className="bg-blue-900 rounded-full p-3 mb-4">
                    <feature.icon className="w-8 h-8 text-blue-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
                  <p className="text-text-accent">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
    }
    
  


export default Features