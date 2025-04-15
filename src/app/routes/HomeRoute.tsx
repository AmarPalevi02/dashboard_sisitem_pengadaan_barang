import Dashboard from '@/pages/Dashboard';
import { Route, Routes } from "react-router-dom";

const HomeRoute = () => {
   return (
      <Routes>
         <Route path='/' element={<Dashboard />} />
      </Routes>
   )
}

export default HomeRoute