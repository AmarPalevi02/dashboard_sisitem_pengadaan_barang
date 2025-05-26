import Breadcrumb from "@/components/Breadcrumb"
import TableBody from "@/components/TableBody"
import TableHeader from "@/components/TableHeader"
import TitlePage from "@/components/TitlePage"
import { getDatas } from "@/lib/fetch"
import { useEffect, useState } from "react"

type procurements = {
   id: string | number,
   name: string,
   email: string
}

const ProcurementsAll = () => {
   const [procurement, setProcurement] = useState<procurements[]>([])
   const columns: string[] = ["No", "Namae", "Email", "Aksi"]

   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      if (confirm('Are you sure you want to delete this user?')) {
      }
   };

   const handleGetDataProcurements = async () => {
      const procurement = await getDatas('admin/datasprocurements')

      setProcurement(procurement.data.data)
   }

   useEffect(() => {
      handleGetDataProcurements()
   }, [])

   const randeringRowProcurement = (procurement: procurements, index: number) => (
      <>
         <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
         <td className="px-6 py-4">{procurement.name}</td>
         <td className="px-6 py-4">{procurement.email}</td>
      </>
   )

   const breadcrumbProcurement = [
      { label: 'Dashboard', link: '/dashboard/admin' },
      { label: 'Procurement', link: '/dashboard/admin/procurements' }
   ]

   return (
      <div>
         <TitlePage title="Procurement" />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbProcurement} />
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
               {procurement.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                     <p className="text-lg">No procurements found.</p>
                     <p className="text-sm mt-2">Add a new user to get started!</p>
                  </div>
               ) : (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={procurement}
                           renderRow={randeringRowProcurement}
                           handleDelete={handleDelete}
                           handleEdit={handleEdit}
                        />
                     </table>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default ProcurementsAll