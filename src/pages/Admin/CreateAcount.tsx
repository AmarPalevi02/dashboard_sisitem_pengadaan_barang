import TitlePage from '@/components/TitlePage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createUserAction } from '@/redux/admin/action'
import { RootState } from '@/redux/store'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

interface UserFormInputs {
   name: string;
   email: string;
   password: string;
   role: string;
}

const CreateAcount = () => {
   const dispatch = useDispatch()
   const { loading, user, error } = useSelector((state: RootState) => state.admin)


   const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<UserFormInputs>({
      defaultValues: {
         name: '',
         email: '',
         password: '',
         role: 'MANAGER',
      }
   });

   const onSubmit: SubmitHandler<UserFormInputs> = async (data) => {
      try {
         await dispatch(createUserAction('admin/createakun', data));
         reset();
      } catch (err) {

      }
   };
   return (
      <div>
         <TitlePage title='Buat Akun Karyawan' />
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
                     placeholder="Enter name"
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
                  <Label htmlFor="password">Password</Label>
                  <Input
                     id="password"
                     type="password"
                     {...register('password', {
                        required: 'Password is required',
                        minLength: {
                           value: 6,
                           message: 'Password must be at least 6 characters',
                        },
                     })}
                     placeholder="Enter password"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
               </div>

               <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select
                     onValueChange={(value) => setValue('role', value, { shouldValidate: true })}
                     defaultValue="MANAGER"
                  >
                     <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="MANAGER">Manager</SelectItem>
                        <SelectItem value="EMPLOYEE">Employee</SelectItem>
                        <SelectItem value="PROCUREMENT">Procurement</SelectItem>
                     </SelectContent>
                  </Select>
                  <input
                     type="hidden"
                     {...register('role', { required: 'Role is required' })}
                  />
                  {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
               </div>

               {error && <p className="text-red-500 text-sm">{error}</p>}
               {user && <p className="text-green-500 text-sm">User created successfully!</p>}

               <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                  variant={'outline'}
               >
                  {loading ? 'Creating...' : 'Create User'}
               </Button>
            </form>
         </div>
      </div>
   )
}

export default CreateAcount