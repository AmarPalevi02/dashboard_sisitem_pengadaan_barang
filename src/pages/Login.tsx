import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postData } from '@/lib/fetch'
import { userLogin } from '@/redux/auth/actions'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
const Login = () => {
   const dispatch = useDispatch()
   const form = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
   });

   const [error, setError] = useState('')

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
      } catch (error) {
         setError("Login gagal. Silakan coba lagi."); // gunakan useState kalau mau tampilkan error
      }
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <Card className="w-full max-w-md">
            <CardHeader className="text-center">
               <CardTitle className="text-2xl">Silakan Login 👋</CardTitle>
            </CardHeader>
            <CardContent>
               {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
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