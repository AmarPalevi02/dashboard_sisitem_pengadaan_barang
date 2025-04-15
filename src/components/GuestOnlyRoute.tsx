import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function GuestOnlyRoute({ children }: { children?: React.ReactNode }) {
   const { token, role } = useSelector((state: RootState) => state.auth);

   if (token) {
      switch (role) {
         case "MANAGER":
            return <Navigate to="/dashboard/manager" replace />;
         case "PROCUREMENT":
            return <Navigate to="/dashboard/procurement" replace />;
         case "ADMIN":
            return <Navigate to="/dashboard/admin" replace />;
         default:
            return <Navigate to="/" replace />;
      }
   }
   
   return children || <Outlet />;
}