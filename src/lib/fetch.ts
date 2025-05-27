import { configs } from '@/config'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleApiError } from './handleApiError'

export const getDatas = async (url: string) => {
   const token = Cookies.get("token")
   try {
      const response = await axios.get(`${configs.base_url}/${url}`, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      return response
   } catch (error) {
      throw handleApiError(error)
   }
}

export const postData = async (
   url: string,
   payload: Record<string, any> | FormData,
   formData: boolean = false
) => {
   const token = Cookies.get("token")
   try {
      const response = await axios.post(`${configs.base_url}/${url}`, payload, {
         headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': formData ? 'multipart/form-data' : 'application/json',
         }
      })

      return response
   } catch (error) {
      throw handleApiError(error)
   }
}

export const deleteData = async (url: string) => {
   const token = Cookies.get("token")
   try {
      const response = await axios.delete(`${configs.base_url}/${url}`, {
         headers: {
            Authorization: `Bearer ${token}`,
         }
      })

      return response

   } catch (error) {
      throw handleApiError(error)
   }
}