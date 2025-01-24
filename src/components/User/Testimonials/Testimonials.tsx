import React from 'react'
import testimonials from '../../../utils/Testimonials';
import { AnimatedTestimonials } from '../../ui/animated-testimonials';
const Testimonials:React.FC = () => {
  return (
    <div className='w-full bg-background-secondary py-16 relative overflow-hidden'>
      <h2 className="text-3xl font-normal font-sans  text-text-primary sm:text-4xl text-center mb-12">
          Testimonials
        </h2>
    <AnimatedTestimonials testimonials={testimonials} />
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-text-accent to-transparent"></div>
    </div>
  )
}

export default Testimonials