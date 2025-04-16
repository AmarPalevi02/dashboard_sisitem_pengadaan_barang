import { Alert, AlertDescription, AlertTitle } from './ui/alert'

type PropsAalert = {
   alertType: string,
   message: string
}

const AlertContex = ({ alertType, message }: PropsAalert) => {
   return (
      <div className="fixed top-4 right-4 z-[9999] animate-slide-in shadow-lg">
         <Alert
            className={`w-[300px] ${alertType === "error"
               ? "bg-red-100 text-red-700 border border-red-400"
               : "bg-green-100 text-green-700 border border-green-400"
               }`}
         >
            <AlertTitle>{alertType === "error" ? "Peringatan!" : "Berhasil!"}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
         </Alert>
      </div>
   )
}

export default AlertContex