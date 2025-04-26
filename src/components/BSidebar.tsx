import { useState } from 'react'
import { LogOut, Menu } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { MenuItems, Role, menuConfigs } from '@/config/menuConfig'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogout } from '@/redux/auth/actions'

const BSidebar = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [collapsed, setCollapsed] = useState(false)
   const toggleSidebar = () => setCollapsed(!collapsed)
   const { role, name } = useSelector((state: RootState) => state.auth)

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
   }

   return (
      <div
         className={`${collapsed ? 'w-20' : 'w-64'
            } h-screen bg-white border-r transition-all duration-300 flex flex-col`}
      >
         {/* Header */}
         <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-3">

               {!collapsed && <span className="font-semibold">Hello {name}</span>}
            </div>
            <button onClick={toggleSidebar}>
               <Menu className="w-5 h-5" />
            </button>
         </div>

         {/* Menu */}
         <nav className="flex-1 px-2 py-4 space-y-2">
            {menu.map((item) => (
               <a
                  key={item.label}
                  href={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 text-gray-700 text-sm"
               >
                  <span className="w-5 h-5">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
               </a>
            ))}
         </nav>

         {/* Footer */}
         <div className="px-4 py-3 border-t">
            <button onClick={handleLogout} className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600">
               <LogOut className="w-5 h-5" />
               {!collapsed && <span>Logout</span>}
            </button>
         </div>
      </div>
   )
}

export default BSidebar