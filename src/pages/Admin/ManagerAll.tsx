import TableHeader from '@/components/TableHeader';
import TitlePage from '@/components/TitlePage'
import { getDatas } from '@/lib/fetch';
import { Edit, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'


interface Managers {
   id: string | number,
   name: string,
   email: string
}

const ManagerAll = () => {
   const [manager, setManager] = useState<Managers[]>([])
   const columns: string[] = ["No", "Namae", "Email", "Aksi"]
   const handleEdit = (id: number) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number) => {
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

   console.log(manager)
   return (
      <div>
         <TitlePage title='Manager' />
         <div className="container mx-auto p-6 max-w-6xl">
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
                        <tbody>
                           {manager.map((manager, index) => (
                              <tr
                                 key={manager.id}
                                 className="bg-white border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                              >
                                 <td className="px-6 py-4 font-medium text-gray-900">
                                    {index + 1}
                                 </td>
                                 <td className="px-6 py-4">{manager.name}</td>
                                 <td className="px-6 py-4">{manager.email}</td>
                                 <td className="px-6 py-4 flex space-x-3">
                                    <button
                                       onClick={() => handleEdit(manager.id)}
                                       className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition transform hover:scale-105"
                                       title="Edit user"
                                    >
                                       <Edit className="w-4 h-4 mr-1" />
                                       Edit
                                    </button>
                                    <button
                                       onClick={() => handleDelete(manager.id)}
                                       className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition transform hover:scale-105"
                                       title="Delete user"
                                    >
                                       <Trash2 className="w-4 h-4 mr-1" />
                                       Hapus
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default ManagerAll