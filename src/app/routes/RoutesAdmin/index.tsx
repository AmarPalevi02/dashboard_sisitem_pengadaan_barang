
import DashboardAdmin from "@/pages/Admin/DashboardAdmin";
import { Route, Routes } from "react-router-dom";

const RoutesAdmin = () => {
   return (
      <Routes>
         <Route path='/' element={<DashboardAdmin />} />
      </Routes>
   )
}

export default RoutesAdmin