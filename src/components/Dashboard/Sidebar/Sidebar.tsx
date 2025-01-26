import type React from "react"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Shield, Key, Zap, Trophy } from "lucide-react"
import Logo from "./Logo"
import NavItem from "./NavItem"
import UserProfile from "../UserProfile"

const menuItems = [
  { icon: Shield, label: "Phishing Detection", path: "/phishing-detection" },
  { icon: Key, label: "Password Analysis", path: "/password-analysis" },
  { icon: Zap, label: "Real-time Protection", path: "/real-time-protection" },
  { icon: Trophy, label: "Gamified Learning", path: "/gamified-learning" },
]

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={`flex flex-col h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <Logo isExpanded={isExpanded} />
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-grow">
        {menuItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} label={item.label} path={item.path} isExpanded={isExpanded} />
        ))}
      </nav>

      <UserProfile isExpanded={isExpanded} />
    </div>
  )
}

export default Sidebar

