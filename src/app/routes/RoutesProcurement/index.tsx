import DashboardProcurement from '@/pages/Procurement/DashboardProcurement';
import { Route, Routes } from "react-router-dom";

const RoutesProcurement = () => {
   return (
      <Routes>
         <Route path='/' element={<DashboardProcurement />} />
      </Routes>
   )
}

export default RoutesProcurement