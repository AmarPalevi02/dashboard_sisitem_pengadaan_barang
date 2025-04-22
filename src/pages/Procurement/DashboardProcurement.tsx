import AlertContex from '@/components/AlertContex'
import BSidebar from '@/components/BSidebar'
import { clearAlert } from '@/redux/alert/actions'
import { RootState } from '@/redux/store'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const DashboardProcurement = () => {
   const dispatch = useDispatch()
   const { message, alertType } = useSelector((state: RootState) => state.alert)

   useEffect(() => {
      if (message) {
         const timer = setTimeout(() => {
            dispatch(clearAlert())
         }, 4000)

         return () => clearTimeout(timer)
      }
   }, [message])
   return (
      <div className="flex h-screen">
         <BSidebar />
         <div className="flex-1 p-6 bg-blue-100">
            {message && (
               <AlertContex alertType={`${alertType}`} message={message} />
            )}
            <p>
               DashboardProcurement
            </p>
         </div>
      </div>
   )
}

export default DashboardProcurement