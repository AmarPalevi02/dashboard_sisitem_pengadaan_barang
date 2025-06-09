import Breadcrumb from '@/components/Breadcrumb'
import TitlePage from '@/components/TitlePage'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fetchOneVendorAction, putVendorAction } from '@/redux/admin/action';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

interface VendorFormData {
   name: string;
   email: string;
   phone: string;
   address: string;
}

const EditVendor = () => {
   const { id } = useParams<{ id: string }>();
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { vendor, isLoadingVendor, errorVendor } = useSelector((state: RootState) => state.admin) as any;

   const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<VendorFormData>({
      defaultValues: {
         name: '',
         email: '',
         phone: '',
         address: '',
      },
   });

   const onSubmit: SubmitHandler<VendorFormData> = async (data) => {
      try {
         await dispatch(putVendorAction(`admin/vendor/edit/${id}`, data))
         reset()
         navigate('/dashboard/admin/vendors')
      } catch (error) {

      }
   }

   useEffect(() => {
      dispatch(fetchOneVendorAction(`${id}`))
   }, [dispatch])

   useEffect(() => {
      if (vendor != null) {
         setValue('name', vendor.name);
         setValue('email', vendor.email);
         setValue('phone', vendor.phone);
         setValue('address', vendor.address);
      }
   }, [vendor, setValue])


   const breadcrumbItems = [
      { label: 'Dashboard', link: '/dashboard/admin' },
      { label: 'Vendor', link: '/dashboard/admin/vendors' },
      { label: 'Edit', link: '/dashboard/admin/vendors' },
   ];

   return (
      <div>
         <TitlePage title='Edit Vendor' />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbItems} />

            <form
               onSubmit={handleSubmit(onSubmit)}
               className="space-y-6 px-6"
            >
               <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                     id="name"
                     type="text"
                     {...register('name', { required: 'Name is required' })}
                     placeholder="Enter name vendor (PT JAYA ABADI)"

                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
               </div>

               <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     type="email"
                     {...register('email', {
                        required: 'Email is required',
                        pattern: {
                           value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                           message: 'Invalid email address',
                        },
                     })}
                     placeholder="Enter email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
               </div>

               <div className="space-y-2">
                  <Label htmlFor="name">Phone</Label>
                  <Input
                     id="name"
                     type="text"
                     {...register('phone', { required: 'phone is required' })}
                     placeholder="Enter phone"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
               </div>

               <div className="space-y-2">
                  <Label htmlFor="name">Alamat</Label>
                  <Input
                     id="name"
                     type="text"
                     {...register('address', { required: 'Alamat is required' })}
                     placeholder="Enter Alamat"
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
               </div>

               {errorVendor && <p className="text-red-500 text-sm">{errorVendor}</p>}
               {vendor && <p className="text-green-500 text-sm">User created successfully!</p>}

               <Button
                  type="submit"
                  disabled={isLoadingVendor}
                  className="w-full"
                  variant={'outline'}
               >
                  {isLoadingVendor ? 'Creating...' : 'Create User'}
               </Button>
            </form>
         </div>
      </div>
   )
}

export default EditVendor