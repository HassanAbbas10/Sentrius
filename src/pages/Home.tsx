import React from 'react'

const Home : React.FC = () => {
  return (
    <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Our Website</h1>
          <p className="text-lg text-gray-600">This is the main content of your home page.</p>
        </div>
      </main>
  )
}

export default Home