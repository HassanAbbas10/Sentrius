import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Dashboard/Sidebar/Sidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "../components/ui/sidebar"
const Dashboard:React.FC = () => {
  return (
    <SidebarProvider>
    <div className="flex h-screen bg-background-primary text-text-primary">
      <Sidebar />
      <SidebarInset className="flex-1 overflow-auto">
        <header className="flex h-16 items-center gap-4 border-b px-6">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold">Security Dashboard</h1>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </div>
  </SidebarProvider>

  )
}

export default Dashboard