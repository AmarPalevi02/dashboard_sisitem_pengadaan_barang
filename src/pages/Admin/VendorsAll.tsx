import Breadcrumb from '@/components/Breadcrumb'
import TableBody from '@/components/TableBody'
import TableHeader from '@/components/TableHeader'
import TitlePage from '@/components/TitlePage'
import { deleteData, getDatas } from '@/lib/fetch'
import { deleteVendorAction } from '@/redux/admin/action'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

type Vendors = {
   id: string | number,
   name: string,
   email: string,
   phone: string,
   address: string
}

const VendorsAll = () => {
   const [vendor, setVendor] = useState<Vendors[]>([])
   const dispatch = useDispatch()
   const { deletedVendor } = useSelector((state: RootState) => state.admin)
   
   const columns: string[] = ["No", "Namae", "Email", "phone", "address", "Aksi"]

   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      dispatch(deleteVendorAction(id))
   };


   const handleGetVendors = async () => {
      const vendor = await getDatas('admin/vendor')

      setVendor(vendor.data.data)
   }

   useEffect(() => {
      handleGetVendors()
   }, [])

   const randerRowVendor = (vendor: Vendors, index: number) => (
      <>
         <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
         <td className="px-6 py-4">{vendor.name}</td>
         <td className="px-6 py-4">{vendor.email}</td>
         <td className="px-6 py-4">{vendor.phone}</td>
         <td className="px-6 py-4">{vendor.address}</td>
      </>
   )

   const breadcrumbItems = [
      { label: 'Dashboard', link: '/dashboard/admin' },
      { label: 'Managers', link: '/dashboard/admin/vendors' },
   ];

   useEffect(() => {

   }, [])

   return (
      <div>
         <TitlePage title='Vendor' />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbItems} />
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
               {vendor.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                     <p className="text-lg">No vendors found.</p>
                     <p className="text-sm mt-2">Add a new user to get started!</p>
                  </div>
               ) : (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={vendor}
                           renderRow={randerRowVendor}
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

export default VendorsAll