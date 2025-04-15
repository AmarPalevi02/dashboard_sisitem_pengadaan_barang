import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RoleBasedLayout() {
   const { role } = useSelector((state: RootState) => state.auth)

   switch (role) {
      case "MANAGER":
         return <Navigate to="/dashboard/manager" replace />;
      case "PROCUREMENT":
         return <Navigate to="/dashboard/procurement" replace />;
      case "ADMIN":
         return <Navigate to="/dashboard/admin" replace />;
      case "EMPLOYEE":
         return <Navigate to="/dashboard/employe" replace />;
      default:
         return <Navigate to="/signin" replace />;
   }
}