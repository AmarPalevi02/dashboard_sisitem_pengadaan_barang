import Breadcrumb from '@/components/Breadcrumb'
import TableBody from '@/components/TableBody'
import TableHeader from '@/components/TableHeader'
import TitlePage from '@/components/TitlePage'
import { deleteVendorAction, getAllVendorAction, resetDeletedVendor, responseApiVendor } from '@/redux/admin/action'
import { clearAlert, setAlert } from '@/redux/alert/actions'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

type Vendors = responseApiVendor

const VendorsAll = () => {
   const dispatch = useDispatch()
   const { deletedVendor, vendors } = useSelector((state: RootState) => state.admin)

   const columns: string[] = ["No", "Namae", "Email", "phone", "address", "Aksi"]

   const handleEdit = (id: number | string) => {
      alert(`Edit user with ID: ${id}`);
   };

   const handleDelete = (id: number | string) => {
      dispatch(deleteVendorAction(id))
   };

   useEffect(() => {
      dispatch(getAllVendorAction())
      // dispatch(clearAlert())
   }, [dispatch, deletedVendor])

   useEffect(() => {
      if (deletedVendor) {
         dispatch(setAlert(`Behasil menghapus ${deletedVendor}`, 'success'));
         dispatch(getAllVendorAction())
         dispatch(resetDeletedVendor())
      }
   }, [deletedVendor, dispatch])

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

   return (
      <div>
         <TitlePage title='Vendor' />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbItems} />
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
               {Array.isArray(vendors) && vendors[0] ? (
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-600">
                        <TableHeader columns={columns} />
                        <TableBody
                           data={vendors}
                           renderRow={randerRowVendor}
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

export default VendorsAll