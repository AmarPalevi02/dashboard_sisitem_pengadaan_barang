import { SET_ALERT, CLEAR_ALERT } from "./constans"

const initialState = {
   message: "",
   alertType: "",
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
            message: "",
            alertType: "",
         };
      default:
         return state;
   }
};