import AdminLayout from "@/pages/Admin/AdminLayout";
import DashboardAdmin from "@/pages/Admin/DashboardAdmin";
import EmployeesAll from "@/pages/Admin/EmployeesAll";
import ManagerAll from "@/pages/Admin/ManagerAll";
import ProcurementsAll from "@/pages/Admin/ProcurementsAll";
import VendorsAll from "@/pages/Admin/VendorsAll";
import { Route, Routes } from "react-router-dom";

const RoutesAdmin = () => {
   return (
      <Routes>
         <Route element={<AdminLayout />}>
            <Route path='/' element={<DashboardAdmin />} />
            <Route path="/managers" element={<ManagerAll />} />
            <Route path="/procurements" element={<ProcurementsAll />} />
            <Route path="/employees" element={<EmployeesAll />} />
            <Route path="/vendors" element={<VendorsAll />} />
         </Route>
      </Routes>
   )
}

export default RoutesAdmin