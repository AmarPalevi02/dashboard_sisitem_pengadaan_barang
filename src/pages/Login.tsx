import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postData } from '@/lib/fetch'
import { userLogin } from '@/redux/auth/actions'
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setAlert } from '@/redux/alert/actions'
import { FaRegEyeSlash } from "react-icons/fa6";
import { TbEyeSearch } from "react-icons/tb";
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import GlobalAlert from '@/components/common/GlobalAlert'


const Login = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [showPassword, setShowPassword] = useState<boolean>(false)
   const form = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
   });

   const handleLogin = async (data: { email: string; password: string }) => {
      try {
         const response = await postData("auth/login", data);

         dispatch(
            userLogin(
               response?.data.result.token,
               response?.data.result.user.name,
               response?.data.result.user.role,
               true
            )
         );
         dispatch(setAlert(response?.data.message || "Login berhasil!", "success"));
      } catch (err: any) {
         dispatch(setAlert(err?.message || "Email atau password salah", "error"));
      }
   };

   useEffect(() => {

      const token = Cookies.get("token")
      const role = Cookies.get("role")

      if (token) {
         const path = role ? `/dashboard/${role.toLowerCase()}` : "/";
         navigate(path, { replace: true });
      }
   }, []);

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <GlobalAlert />
         <Card className="w-full max-w-md">
            <CardHeader className="text-center">
               <CardTitle className="text-2xl">Silakan Login 👋</CardTitle>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
                     <FormField
                        control={form.control}
                        name="email"
                        rules={{ required: "Email wajib diisi" }}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                 <Input placeholder="email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="password"
                        rules={{ required: "Password wajib diisi" }}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                 <div className="relative">
                                    <Input
                                       placeholder="******"
                                       type={showPassword ? "text" : "password"}
                                       {...field}
                                       className="pr-10"
                                    />
                                    <button
                                       type="button"
                                       onClick={() => setShowPassword((prev) => !prev)}
                                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                                    >
                                       {showPassword ? <TbEyeSearch size={20} /> : <FaRegEyeSlash size={20} />}
                                    </button>
                                 </div>
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <Button type="submit" className="w-full shadow-md">
                        Login
                     </Button>
                  </form>
               </Form>
            </CardContent>
         </Card>
      </div>
   )
}

export default Login