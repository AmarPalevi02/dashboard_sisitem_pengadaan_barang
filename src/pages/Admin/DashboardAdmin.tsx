import BSidebar from "@/components/BSidebar"
import CountUserCard from "@/components/CountUserCard"
import GlobalAlert from "@/components/common/GlobalAlert"
import { fetchingCountManager, fetchingEmployee, fetchingProcurement, fetchingVendor } from "@/redux/admin/action"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const DashboardAdmin = () => {
   const dispatch = useDispatch()
   const { managerCount, procurmentCount, employeeCount, vendorCount } = useSelector((state: RootState) => state.admin)

   console.log(procurmentCount)
   useEffect(() => {
      dispatch(fetchingCountManager());
      dispatch(fetchingProcurement())
      dispatch(fetchingEmployee())
      dispatch(fetchingVendor())
   }, [dispatch])

   return (
      <div className="flex h-screen">
         <BSidebar />
         <main className="flex-1 p-6 bg-blue-100">
            <GlobalAlert />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
               <CountUserCard bgColor="bg-yellow-100" title="Manager" count={managerCount} icon="📦" />
               <CountUserCard bgColor="bg-green-100" title="Procurements" count={procurmentCount} icon="📦" />
               <CountUserCard bgColor="bg-red-100" title="Employees" count={employeeCount} icon="📦" />
               <CountUserCard bgColor="bg-red-100" title="Vendor" count={vendorCount} icon="📦" />
            </div>
         </main>
      </div>
   )
}

export default DashboardAdmin