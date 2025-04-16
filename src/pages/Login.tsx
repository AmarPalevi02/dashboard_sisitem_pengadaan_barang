import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postData } from '@/lib/fetch'
import { userLogin } from '@/redux/auth/actions'
import { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { clearAlert, setAlert } from '@/redux/alert/actions'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import AlertContex from '@/components/AlertContex'

const Login = () => {
   const dispatch = useDispatch()
   const { message, alertType } = useSelector((state: RootState) => state.alert)
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
      if (message) {
         const timer = setTimeout(() => {
            dispatch(clearAlert());
         }, 4000);
         return () => clearTimeout(timer);
      }
   }, [message]);

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         {message && (
            <AlertContex alertType={`${alertType}`} message={message} />
         )}
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
                                 <Input type="password" placeholder="******" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <Button type="submit" className="w-full">
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