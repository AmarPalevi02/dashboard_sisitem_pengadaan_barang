import Breadcrumb from '@/components/Breadcrumb';
import TableBody from '@/components/TableBody';
import TableHeader from '@/components/TableHeader';
import TitlePage from '@/components/TitlePage'
import { getAllManagerAction, responseApi } from '@/redux/admin/action';
import { RootState } from '@/redux/store';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

type Managers = responseApi;

const ManagerAll = () => {
   const columns: string[] = ["No", "Namae", "Email", "Aksi"]

   const dispatch = useDispatch()
   const { managers } = useSelector((state: RootState) => state.admin)

   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      if (confirm('Are you sure you want to delete this user?')) {
      }
   };

   useEffect(() => {
      dispatch(getAllManagerAction())
   }, [dispatch])

   console.log(managers)
   const randerRowManager = (manager: Managers, index: number) => (
      <>
         <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
         <td className="px-6 py-4">{manager.name}</td>
         <td className="px-6 py-4">{manager.email}</td>
      </>
   )

   const breadcrumbItems = [
      { label: 'Dashboard', link: '/dashboard/admin' },
      { label: 'Managers', link: '/dashboard/admin/managers' },
   ];

   return (
      <div>
         <TitlePage title='Manager' />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbItems} />
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
               {Array.isArray(managers) && managers[0] ? (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={managers}
                           renderRow={randerRowManager}
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

export default ManagerAll