import BSidebar from '@/components/BSidebar'
import GlobalAlert from '@/components/common/GlobalAlert'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const DashboardProcurement = () => {
   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

   const handleSidebarToggle = (isCollapsed: boolean) => {
      setIsSidebarCollapsed(isCollapsed)
   }
   return (
      <div className="flex h-screen">
         <BSidebar onToggle={handleSidebarToggle} />
         <main
            className={`flex-1 p-6 bg-blue-100 transition-all duration-300 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'
               }`}
         >
            <GlobalAlert />
            <Outlet />
         </main>
      </div>
   )
}

export default DashboardProcurement