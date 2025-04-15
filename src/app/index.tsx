import { Route, Routes } from "react-router-dom";
import GuardRoute from "@/components/GuardRoute";
import GuestOnlyRoute from "@/components/GuestOnlyRoute";
import Login from "@/pages/Login";
import RoutesManager from "./routes/RoutesManager";
import RoutesProcurement from "./routes/RoutesProcurement";
import RoutesAdmin from "./routes/RoutesAdmin";
import { RoleBasedLayout } from "@/components/layouts/RoleBasedLayout";

const AppRoutes = () => {
   return (
      <Routes>
         <Route
            path="/signin"
            element={
               <GuestOnlyRoute>
                  <Login />
               </GuestOnlyRoute>
            }
         />

         <Route
            path="/dashboard/manager/*"
            element={
               <GuardRoute allowedRoles={"MANAGER"}>
                  <RoutesManager />
               </GuardRoute>
            }
         />

         <Route
            path="/dashboard/procurement/*"
            element={
               <GuardRoute allowedRoles={"PROCUREMENT"}>
                  <RoutesProcurement />
               </GuardRoute>
            }
         />

         <Route
            path="/dashboard/admin/*"
            element={
               <GuardRoute allowedRoles={"ADMIN"}>
                  <RoutesAdmin />
               </GuardRoute>
            }
         />

         <Route
            path="/"
            element={<RoleBasedLayout />}
         />
      </Routes>
   )
}

export default AppRoutes;
