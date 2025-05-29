import { SET_ALERT, CLEAR_ALERT } from "./constans"

interface AlertType {
   message: string | null, 
   alertType: "success" | "error" | "warning" | null
}

const initialState: AlertType = {
   message: null,
   alertType: null,
};


export default function alertReducer(state = initialState, action: any) {
   switch (action.type) {
      case SET_ALERT:
         return {
            ...state,
            message: action.payload.message,
            alertType: action.payload.alertType,
         };
      case CLEAR_ALERT:
         return {
            ...state,
            message: null,
            alertType: null,
         };
      default:
         return state;
   }
};