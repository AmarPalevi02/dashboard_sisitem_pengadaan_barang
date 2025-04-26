import BSidebar from '@/components/BSidebar'
import GlobalAlert from '@/components/common/GlobalAlert'

const DashboardProcurement = () => {
   return (
      <div className="flex h-screen">
         <BSidebar />
         <div className="flex-1 p-6 bg-blue-100">
            <GlobalAlert />
            <p>
               DashboardProcurement
            </p>
         </div>
      </div>
   )
}

export default DashboardProcurement