import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function GuestOnlyRoute({ children }: { children?: React.ReactNode }) {
   const { token } = useSelector((state: RootState) => state.auth);

   if (!token) return <Navigate to='/sigin' replace />;

   return children || <Outlet />;
}