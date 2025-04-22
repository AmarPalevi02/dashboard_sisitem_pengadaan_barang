import BSidebar from "@/components/BSidebar"

const DashboardAdmin = () => {
   return (
      <div className="flex h-screen">
         <BSidebar />
         <main className="flex-1 p-6 bg-blue-100">
            <p>Admin</p>
         </main>
      </div>
   )
}

export default DashboardAdmin