import CountUserCard from "@/components/CountUserCard"
import { fetchingCountManager, fetchingEmployee, fetchingProcurement, fetchingVendor } from "@/redux/admin/action"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { FaUserTie } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaBoxOpen } from "react-icons/fa6";``
import { Link } from "react-router-dom"

const DashboardAdmin = () => {
   const dispatch = useDispatch()
   const { managerCount, procurmentCount, employeeCount, vendorCount } = useSelector((state: RootState) => state.admin)

   useEffect(() => {
      dispatch(fetchingCountManager());
      dispatch(fetchingProcurement())
      dispatch(fetchingEmployee())
      dispatch(fetchingVendor())
   }, [dispatch])

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
         <Link to="/dashboard/admin/managers">
            <CountUserCard bgColor="bg-yellow-100" title="Manager" count={managerCount} icon={<FaUserTie />} />
         </Link>
         <Link to="/dashboard/admin/procurements">
            <CountUserCard bgColor="bg-green-100" title="Procurements" count={procurmentCount} icon={<TfiShoppingCartFull />} />
         </Link>
         <Link to="/dashboard/admin/employees">
            <CountUserCard bgColor="bg-red-100" title="Employees" count={employeeCount} icon={<HiUsers />} />
         </Link>
         <Link to="/dashboard/admin/vendors">
            <CountUserCard bgColor="bg-lime-100" title="Vendor" count={vendorCount} icon={<FaBoxOpen />} />
         </Link>
      </div>
   )
}

export default DashboardAdmin