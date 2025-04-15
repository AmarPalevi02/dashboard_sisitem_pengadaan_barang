import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type Props = {
   allowedRoles: string;
   children: React.ReactNode;
}

export default function GuardRoute({ allowedRoles, children }: Props) {
   const { token, role } = useSelector((state: RootState) => state.auth);

   if (!token || !role || !allowedRoles.includes(role)) {
      return <Navigate to="/signin" replace />;
   }

   return children || <Outlet />;
}