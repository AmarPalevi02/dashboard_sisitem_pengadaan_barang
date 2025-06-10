import AdminLayout from "@/pages/Admin/AdminLayout";
import CreateAcount from "@/pages/Admin/CreateAcount";
import CreateVendor from "@/pages/Admin/CreateVendor";
import DashboardAdmin from "@/pages/Admin/DashboardAdmin";
import EditAccountManager from "@/pages/Admin/EditAccountManager";
import EditVendor from "@/pages/Admin/EditVendor";
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
            <Route path="/createacount" element={<CreateAcount />} />
            <Route path="/createvendor" element={<CreateVendor />} />
            <Route path="/vendor/edit/:id" element={<EditVendor />} />
            <Route path="/manager/edit/:id" element={<EditAccountManager />} />
         </Route>
      </Routes>
   )
}

export default RoutesAdmin