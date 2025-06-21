import TitlePage from "@/components/TitlePage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createVendorAction } from "@/redux/admin/action"
import { RootState } from "@/redux/store"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

interface UserFormInputsVendor {
   name: string,
   email: string,
   phone: string,
   address: string
}

const CreateVendor = () => {
   const dispatch = useDispatch()
   const { loading, vendor, error } = useSelector((state: RootState) => state.admin)

   const { register, handleSubmit, formState: { errors }, reset } = useForm<UserFormInputsVendor>({
      defaultValues: {
         name: '',
         email: '',
         phone: '',
         address: ''
      }
   })

   const onSubmit: SubmitHandler<UserFormInputsVendor> = async (data) => {
      try {
         await dispatch(createVendorAction('admin/vendor/create', data))
         reset()
      } catch (error) {

      }
   }
   return (
      <div>
         <TitlePage title="Tambah Vendor" />
         <div className="mt-6">
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

               {error && <p className="text-red-500 text-sm">{error}</p>}
               {vendor && <p className="text-green-500 text-sm">User created successfully!</p>}

               <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                  variant={'outline'}
               >
                  {loading ? 'Creating...' : 'Create Vendor'}
               </Button>
            </form>
         </div>
      </div>
   )
}

export default CreateVendor