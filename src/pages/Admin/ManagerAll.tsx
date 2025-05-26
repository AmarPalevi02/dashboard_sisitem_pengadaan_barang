import Breadcrumb from '@/components/Breadcrumb';
import TableBody from '@/components/TableBody';
import TableHeader from '@/components/TableHeader';
import TitlePage from '@/components/TitlePage'
import { getDatas } from '@/lib/fetch';
import { useEffect, useState } from 'react'

interface Managers {
   id: string | number,
   name: string,
   email: string
}

const ManagerAll = () => {
   const [manager, setManager] = useState<Managers[]>([])
   const columns: string[] = ["No", "Namae", "Email", "Aksi"]
   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      if (confirm('Are you sure you want to delete this user?')) {
      }
   };

   const handleDatasMananger = async () => {
      const managers = await getDatas('admin/datasmanager')
      setManager(managers.data.data)
   }

   useEffect(() => {
      handleDatasMananger()
   }, [])

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

   console.log(manager)
   return (
      <div>
         <TitlePage title='Manager' />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbItems} />
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
               {manager.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                     <p className="text-lg">No users found.</p>
                     <p className="text-sm mt-2">Add a new user to get started!</p>
                  </div>
               ) : (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={manager}
                           renderRow={randerRowManager}
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

export default ManagerAll