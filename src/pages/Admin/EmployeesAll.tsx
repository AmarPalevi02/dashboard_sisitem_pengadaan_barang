import Breadcrumb from '@/components/Breadcrumb'
import TableBody from '@/components/TableBody'
import TableHeader from '@/components/TableHeader'
import TitlePage from '@/components/TitlePage'
import { deletingEmployeAction, getAllEmployeAction, resetDeletingEmploye, responseApiEmploye } from '@/redux/admin/action'
import { setAlert } from '@/redux/alert/actions'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

type employes = responseApiEmploye

const EmployeesAll = () => {
   const dispatch = useDispatch()
   const { employes, deletingmassageemploye } = useSelector((state: RootState) => state.admin)
   const columns: string[] = ["No", "Namae", "Email", "Aksi"]

   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      dispatch(deletingEmployeAction(id))
   };

   useEffect(() => {
      dispatch(getAllEmployeAction())
   }, [dispatch, deletingmassageemploye])

   useEffect(() => {
      if (deletingmassageemploye) {
         dispatch(setAlert(`${deletingmassageemploye}`, 'success'))
         dispatch(getAllEmployeAction())
         dispatch(resetDeletingEmploye())
      }
   }, [deletingmassageemploye, dispatch])

   const randerRowEmploye = (employe: employes, index: number) => (
      <>
         <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
         <td className="px-6 py-4">{employe.name}</td>
         <td className="px-6 py-4">{employe.email}</td>
      </>
   )

   const breadcrumbItem = [
      { label: 'Dashboard', link: '/dashboard/admin' },
      { label: 'Employes', link: '/dashboard/admin/employees' },
   ]

   return (
      <div>
         <TitlePage title='Employe' />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbItem} />
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
               {Array.isArray(employes) && employes[0] ? (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={employes}
                           renderRow={randerRowEmploye}
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

export default EmployeesAll 