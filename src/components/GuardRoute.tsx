import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function GuardRoute({ children }: { children?: React.ReactNode }) {
   const { token } = useSelector((state: RootState) => state.auth);

   if (token) return <Navigate to='/dashboard' replace />;

   return children || <Outlet />;
}