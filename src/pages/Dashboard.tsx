import React from "react"

import Sidebar from "../components/Dashboard/Sidebar/Sidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "../components/ui/sidebar"
const Dashboard:React.FC = () => {
  return (
    <div>
      <div className="flex-1 overflow-auto">
      <header className="flex h-16 items-center gap-4 border-b px-6">
        <SidebarTrigger />
        <h1 className="text-2xl font-semibold">Security Dashboard</h1>
      </header>
      <main className="p-6">
        <h1>This is the dashboard</h1>
      </main>
    </div>
  </div>

  )
}

export default Dashboard