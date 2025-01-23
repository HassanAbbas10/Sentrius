import React from 'react'
import testimonials from '../../../utils/Testimonials';
import { AnimatedTestimonials } from '../../ui/animated-testimonials';
const Testimonials:React.FC = () => {
  return (
    <div className='w-full bg-background-primary'>
      <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl text-center mb-12">
          Testimonials
        </h2>
    <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default Testimonials