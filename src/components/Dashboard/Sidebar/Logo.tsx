import type React from "react"

interface LogoProps {
  isExpanded: boolean
}

const Logo: React.FC<LogoProps> = ({ isExpanded }) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-blue rounded-xl flex items-center justify-center">
        <span className="text-xl font-bold ">S</span>
      </div>
      {isExpanded && <span className="ml-2 text-xl font-semibold">Dashboard</span>}
    </div>
  )
}

export default Logo

