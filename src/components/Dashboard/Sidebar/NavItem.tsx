import type React from "react"
import type { LucideIcon } from "lucide-react"

interface NavItemProps {
  icon: LucideIcon
  label: string
  path: string
  isExpanded: boolean
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, path, isExpanded }) => {
  return (
    <a
      href={path}
      className="flex items-center py-3 px-4 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
    >
      <Icon className="w-6 h-6" />
      {isExpanded && <span className="ml-4">{label}</span>}
    </a>
  )
}

export default NavItem

