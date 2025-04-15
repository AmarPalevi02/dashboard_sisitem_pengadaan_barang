import DashboardManager from '@/pages/Manager/DashboardManager';
import { Route, Routes } from "react-router-dom";

const RoutesManager = () => {
   return (
      <Routes>
         <Route path='/' element={<DashboardManager />} />
      </Routes>
   )
}

export default RoutesManager