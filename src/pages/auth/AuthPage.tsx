import type React from "react"
import { useState, useEffect } from "react"
import LoginForm from "./Login"
import SignupForm from "./SignUp"
import type { User } from "../../types/types"

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [matrix, setMatrix] = useState<string[]>([])

  useEffect(() => {
    const generateMatrix = () => {
      const characters = "01"
      const result = []
      for (let i = 0; i < 100; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * characters.length)))
      }
      return result
    }

    setMatrix(generateMatrix())
    const interval = setInterval(() => {
      setMatrix(generateMatrix())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (user: User) => {
    setIsLoading(true)
   
    console.log("Submitting:", user)
   
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {matrix.map((char, index) => (
          <span
            key={index}
            className="text-blue-500 text-xs"
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <h2 className=" text-center text-3xl font-extrabold text-green-500">
          {isLogin ? "Access Sentriuss" : "Join Sentriuss Network"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-green-500">
          {isLogin ? (
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
          ) : (
            <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />
          )}
          <div className="mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-center text-sm text-green-400 hover:text-green-300 transition-colors duration-300 bg-green-600 bg-opacity-10 hover:bg-opacity-20 py-2 px-4 rounded backdrop-filter backdrop-blur-sm border border-green-500 mt-4"
            >
              {isLogin ? "Request New Access Credentials" : "Access Existing Secure Channel"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage

