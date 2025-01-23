import React from 'react'
import Hero from '../components/User/Hero/Hero'
import Features from '../components/User/Feature/Features'
import HowItWorks from '../components/User/HowItWorks/HowItWorks'
import Testimonials from '../components/User/Testimonials/Testimonials'
const Home : React.FC = () => {
  return (
    <main className="min-h-fit bg-gray-100">
    <Hero/>
    <Features/>
    <HowItWorks/>
    <Testimonials/>
      </main>
  )
}

export default Home