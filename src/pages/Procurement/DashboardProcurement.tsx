import AlertContex from '@/components/AlertContex'
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
      <div>
         {message && (
            <AlertContex alertType={`${alertType}`} message={message} />
         )}
         <p>
            DashboardProcurement
         </p>
      </div>
   )
}

export default DashboardProcurement