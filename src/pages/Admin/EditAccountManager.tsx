import Breadcrumb from "@/components/Breadcrumb"
import TitlePage from "@/components/TitlePage"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchUserAction, putUserAction } from "@/redux/admin/action";
import { RootState } from "@/redux/store";
import { Select } from "@radix-ui/react-select";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

type UserInput = {
   id?: string,
   name: string,
   email: string,
   password: string,
   role: string
}

const EditAccountManager = () => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const navigate = useNavigate()
   const { user, isLoadingUser, isErrorUser } = useSelector((state: RootState) => state.admin) as any

   const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<UserInput>({
      defaultValues: {
         name: '',
         email: '',
         password: '',
         role: '',
      },
   });

   useEffect(() => {
      if (user) {
         setValue('name', user.name)
         setValue('email', user.email)
         setValue('role', user.role)
      }
   }, [user, setValue])

   const onSubmit: SubmitHandler<UserInput> = async (payload) => {
      try {
         await dispatch(putUserAction(`admin/update/${id}`, payload))
         reset()
         navigate('/dashboard/admin/managers')
      } catch (error) {

      }
   }

   useEffect(() => {
      dispatch(fetchUserAction(`${id}`))
   }, [dispatch])

   const breadcrumbItems = [
      { label: 'Dashboard', link: '/dashboard/admin' },
      { label: 'Managers', link: '/dashboard/admin/managers' },
      { label: 'Edit', link: '/dashboard/admin/managers' },
   ];
   return (
      <div>
         <TitlePage title='Edit Manager' />
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
                  <Label htmlFor="password">password</Label>
                  <Input
                     id="password"
                     type="text"
                     // {...register('password', { required: 'phone is required' })}
                     // placeholder="Enter phone"
                  />
                  {/* {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>} */}
               </div>

               {user && (
                  <Select
                     defaultValue={user.role}
                     onValueChange={(value) => setValue('role', value, { shouldValidate: true })}
                     name="role"
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
               )}

               {isErrorUser && <p className="text-red-500 text-sm">{isErrorUser}</p>}
               {/* {user && <p className="text-green-500 text-sm">User created successfully!</p>} */}

               <Button
                  type="submit"
                  disabled={isLoadingUser}
                  className="w-full"
                  variant={'outline'}
               >
                  {isLoadingUser ? 'Update...' : 'Update User'}
               </Button>
            </form>
         </div>
      </div>
   )
}

export default EditAccountManager