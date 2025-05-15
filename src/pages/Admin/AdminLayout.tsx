import BSidebar from '@/components/BSidebar'
import GlobalAlert from '@/components/common/GlobalAlert'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
   return (
      <div className="flex h-screen">
         <BSidebar />
         <main className="flex-1 p-6 bg-blue-100">
            <GlobalAlert />
            <Outlet />
         </main>
      </div>
   )
}

export default AdminLayout