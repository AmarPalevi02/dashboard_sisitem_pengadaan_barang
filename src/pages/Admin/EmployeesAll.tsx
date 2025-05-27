import Breadcrumb from '@/components/Breadcrumb'
import TableBody from '@/components/TableBody'
import TableHeader from '@/components/TableHeader'
import TitlePage from '@/components/TitlePage'
import { getDatas } from '@/lib/fetch'
import { useEffect, useState } from 'react'

type employes = {
   id: string | number,
   name: string,
   email: string
}

const EmployeesAll = () => {
   const [employe, setEmploye] = useState<employes[]>([])
   const columns: string[] = ["No", "Namae", "Email", "Aksi"]

   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      if (confirm('Are you sure you want to delete this user?')) {
      }
   };

   const handleGetEmployes = async () => {
      const employe = await getDatas('admin/datasEmployee')

      setEmploye(employe.data.data)
   }

   useEffect(() => {
      handleGetEmployes()
   }, [])

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
               {employe.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                     <p className="text-lg">No employes found.</p>
                     <p className="text-sm mt-2">Add a new user to get started!</p>
                  </div>
               ) : (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={employe}
                           renderRow={randerRowEmploye}
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

export default EmployeesAll 