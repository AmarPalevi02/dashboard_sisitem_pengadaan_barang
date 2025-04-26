import BSidebar from "@/components/BSidebar"
import GlobalAlert from "@/components/common/GlobalAlert"

const DashboardAdmin = () => {
   return (
      <div className="flex h-screen">
         <BSidebar />
         <main className="flex-1 p-6 bg-blue-100">
            <GlobalAlert />
            <p>Admin</p>
         </main>
      </div>
   )
}

export default DashboardAdmin