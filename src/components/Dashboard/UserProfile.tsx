import type React from "react"
import { useState } from "react"
import { ChevronDown,LogOutIcon,Settings2Icon, User2 } from "lucide-react"

interface UserProfileProps {
  isExpanded: boolean
}

const UserProfile: React.FC<UserProfileProps> = ({ isExpanded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative p-4 border-t border-gray-700">
      <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
        <img src="/placeholder.svg?height=32&width=32" alt="User Avatar" className="w-8 h-8 rounded-full" />
        {isExpanded && (
          <>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">john@example.com</p>
            </div>
            <ChevronDown
              className={`ml-auto w-5 h-5 text-gray-400 transition-transform duration-200 ${isMenuOpen ? "transform rotate-180" : ""}`}
            />
          </>
        )}
      </div>
      {isMenuOpen && isExpanded && (
        <div className="absolute bottom-full left-0 w-full bg-gray-800 rounded-t-lg shadow-lg overflow-hidden">
          <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
            <User2 className="w-4 h-4 mr-2" />
            Profile
          </a>
          <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
            <Settings2Icon className="w-4 h-4 mr-2" />
            Settings
          </a>
          <a href="/logout" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
            <LogOutIcon className="w-4 h-4 mr-2" />
            Logout
          </a>
        </div>
      )}
    </div>
  )
}

export default UserProfile

