
import GuardRoute from "@/components/GuardRoute";
import GuestOnlyRoute from "@/components/GuestOnlyRoute";
import Sidebar from "@/components/Sidebar";
import Login from "@/pages/Login";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";

const AppRoutes = () => {
   return (
      <Routes>
         <Route
            path="/sigin"
            element={
               <GuardRoute>
                  <Login />
               </GuardRoute>
            }
         />

         <Route
            path="/"
            element={
               <GuestOnlyRoute>
                  <Sidebar />
                  <Outlet />
               </GuestOnlyRoute>
            }
         >
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard/*" element={<HomeRoute />} />
         </Route>
      </Routes>
   )
}

export default AppRoutes