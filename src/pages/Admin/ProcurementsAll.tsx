import Breadcrumb from "@/components/Breadcrumb"
import TableBody from "@/components/TableBody"
import TableHeader from "@/components/TableHeader"
import TitlePage from "@/components/TitlePage"
import { deletingProcurementAction, getAllProcurementAction, resetDeletingProcurement, responseApiProcurement } from "@/redux/admin/action"
import { setAlert } from "@/redux/alert/actions"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

type procurements = responseApiProcurement

const ProcurementsAll = () => {
   const dispatch = useDispatch()
   const { procurements, deletingmessageprocurement } = useSelector((state: RootState) => state.admin)
   const columns: string[] = ["No", "Namae", "Email", "Aksi"]

   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      dispatch(deletingProcurementAction(id))
   };

   useEffect(() => {
      dispatch(getAllProcurementAction())
   }, [dispatch, deletingmessageprocurement])


   useEffect(() => {
      if (deletingmessageprocurement) {
         dispatch(setAlert(`${deletingmessageprocurement}`, 'success'))
         dispatch(getAllProcurementAction())
         dispatch(resetDeletingProcurement())
      }
   }, [deletingmessageprocurement, dispatch])

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
               {Array.isArray(procurements) && procurements[0] ? (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={procurements}
                           renderRow={randeringRowProcurement}
                           handleDelete={handleDelete}
                           handleEdit={handleEdit}
                        />
                     </table>
                  </div>
               ) : (
                  <div className="p-6 text-center text-gray-500">
                     <p className="text-lg">No managers found.</p>
                     <p className="text-sm mt-2">Add a new user to get started!</p>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default ProcurementsAll