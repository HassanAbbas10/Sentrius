import type React from "react"
import { useState } from "react"
import type { User, AuthFormProps } from "../../types/types"

const Login: React.FC<AuthFormProps> = ({ onSubmit, isLoading }) => {
  const [user, setUser] = useState<User>({ email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(user)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
          Secure Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-100 placeholder-gray-400"
          placeholder="Enter your secure email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-green-400 mb-2">
          Encryption Key
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-100 placeholder-gray-400"
          placeholder="Enter your encryption key"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-600 bg-opacity-20 hover:bg-opacity-30 text-green-400 font-bold py-2 px-4 rounded transition duration-300 ease-in-out disabled:opacity-50 backdrop-filter backdrop-blur-sm border border-green-500"
      >
        {isLoading ? "Verifying..." : "Establish Secure Connection"}
      </button>
    </form>
  )
}

export default Login

