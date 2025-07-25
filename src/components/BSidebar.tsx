import { useEffect, useState } from 'react'
import { LogOut } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { MenuItems, Role, menuConfigs } from '@/config/menuConfig'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogout } from '@/redux/auth/actions'
import { IoIosArrowForward } from "react-icons/io";
import { fimaleLogo } from '@/assets'

interface BSidebarProps {
   onToggle: (isCollapsed: boolean) => void;
}

const BSidebar = ({ onToggle }: BSidebarProps) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [collapsed, setCollapsed] = useState(false)
   const { role, name } = useSelector((state: RootState) => state.auth)

   const toggleSidebar = () => {
      const newCollapsedState = !collapsed;
      setCollapsed(newCollapsedState);
      onToggle(newCollapsedState);
   }

   const isValidRole = (role: any): role is Role => {
      return ['ADMIN', 'MANAGER', 'PROCUREMENT', 'EMPLOYEE'].includes(role)
   }

   const menu: MenuItems[] = isValidRole(role) ? menuConfigs[role] : []

   const handleLogout = () => {
      Cookies.remove("name")
      Cookies.remove("token")
      Cookies.remove("role")
      dispatch(userLogout())
      navigate('/signin')
      dispatch(userLogout())
   }

   return (
      <div
         className={`fixed top-0 left-0 ${collapsed ? 'w-20' : 'w-64'
            } h-screen bg-white transition-all duration-300 flex flex-col z-50 shadow-lg`}
      >
         {/* Header */}
         <div className="w-full flex justify-center pt-3">
            {collapsed ? (
               <div className="w-12 h-12 bg-gray-500 rounded-full">
                  <img src={fimaleLogo} alt="Logo" className='object-cover flex w-full rounded-full' />
               </div>
            ) : (
               <div className="w-full flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-gray-500 rounded-full">
                     <img src={fimaleLogo} alt="Logo" className='object-cover flex w-full rounded-full' />
                  </div>
                  <span className="font-semibold w-full mt-2">Hello {name}</span>
               </div>
            )}
         </div>

         <div className="flex items-center justify-between px-4 py-3">
            <button onClick={toggleSidebar}>
               {collapsed ?
                  <IoIosArrowForward className="w-7 h-7 absolute top-6 right-[-15px] hover:cursor-pointer bg-white rounded-full shadow-md p-1" />
                  :
                  <IoIosArrowForward className="w-7 h-7 absolute top-6 right-[-13px] rotate-180 hover:cursor-pointer bg-white rounded-full shadow-md p-1" />
               }
            </button>
         </div>

         {/* Menu */}
         <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
            {menu.map((item) => (
               <a
                  key={item.label}
                  href={item.path}
                  className={`flex items-center px-3 py-2 rounded hover:bg-blue-100 text-gray-700 text-sm ${collapsed ? 'justify-center' : 'gap-3'}`}
               >
                  <span className="w-5 h-5 flex items-center justify-center font-bold">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
               </a>
            ))}
         </nav>

         {/* Footer */}
         <div className="px-4 py-3">
            <button onClick={handleLogout} className="flex items-center gap-3 text-sm text-gray-700 hover:cursor-pointer hover:text-red-500">
               <LogOut className="w-5 h-5" />
               {!collapsed && <span>Logout</span>}
            </button>
         </div>
      </div>
   )
}

export default BSidebar