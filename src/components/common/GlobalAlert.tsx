import { clearAlert } from "@/redux/alert/actions"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import AlertContex from "../AlertContex"

const GlobalAlert = () => {
   const dispatch = useDispatch()
   const { message, alertType } = useSelector((state: RootState) => state.alert)

   useEffect(() => {
      if (message) {
         const timer = setTimeout(() => {
            dispatch(clearAlert())
         }, 4000)

         return () => clearTimeout(timer)
      }
   }, [message, dispatch])

   if (!message) return null

   return (
      <AlertContex alertType={alertType} message={message} />
   )
}

export default GlobalAlert