import { LuLayoutDashboard } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineDownloadDone } from "react-icons/md";

export type MenuItems = {
   label: string
   icon: React.ReactNode
   path: string
}

export type Role = "ADMIN" | "MANAGER" | "PROCUREMENT" | "EMPLOYEE"

export const menuConfigs: Record<Role, MenuItems[]> = {
   ADMIN: [
      {
         label: "Dashboard",
         icon: <LuLayoutDashboard className="w-8 h-8 font-bold" />,
         path: "/"
      },
      {
         label: "Tambah akun",
         icon: <FiUserPlus className="w-8 h-8 font-bold" />,
         path: "/dashboard/admin/createacount"
      }
   ],
   MANAGER: [
      {
         label: "Dashboard",
         icon: <LuLayoutDashboard />,
         path: "/"
      },
      {
         label: "Approve",
         icon: <MdOutlineDownloadDone />,
         path: "/approve"
      }
   ],

   PROCUREMENT: [
      {
         label: "Dashboard",
         icon: <LuLayoutDashboard />,
         path: "/"
      },
      {
         label: "Kirim",
         icon: <FiUserPlus />,
         path: "/pengajuan"
      }
   ],

   EMPLOYEE: [
      {
         label: "Dashboard",
         icon: <LuLayoutDashboard />,
         path: "/"
      },
      {
         label: "Pengajuan",
         icon: <FiUserPlus />,
         path: "/pengajuan"
      }
   ]
}