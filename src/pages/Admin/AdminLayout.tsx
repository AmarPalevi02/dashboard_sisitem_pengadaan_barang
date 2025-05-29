import BSidebar from '@/components/BSidebar'
import GlobalAlert from '@/components/common/GlobalAlert'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const AdminLayout = () => {
   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

   const handleSidebarToggle = (isCollapsed: boolean) => {
      setIsSidebarCollapsed(isCollapsed)
   }

   return (
      <div className="flex min-h-screen">
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

export default AdminLayout