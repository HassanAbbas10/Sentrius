import React from 'react'
import Hero from '../components/User/Hero/Hero'
import Features from '../components/User/Feature/Features'
const Home : React.FC = () => {
  return (
    <main className="min-h-fit bg-gray-100">
    <Hero/>
    <Features/>
      </main>
  )
}

export default Home