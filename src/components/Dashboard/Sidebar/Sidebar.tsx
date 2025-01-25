import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
    Sidebar as UISidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "../../../components/ui/sidebar"
import menuItems from "../../../utils/dashboardIcons"
const Sidebar:React.FC = () => {
    const location = useLocation()

  return (
    <UISidebar>
    <SidebarHeader>
      <h2 className="text-xl font-bold px-4 py-2">Security Dashboard</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarMenuButton asChild isActive={location.pathname === item.path}>
              <Link to={item.path} className="flex items-center gap-2">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  </UISidebar>
  )
}

export default Sidebar