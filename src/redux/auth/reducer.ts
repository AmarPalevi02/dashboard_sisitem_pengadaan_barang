import { USER_LOGIN, USER_LOGOUT } from "./constans";
import Cookies from "js-cookie";

interface AuthState {
   token: string | null;
   name: string | null;
   role: string | null;
   isAuthenticated: boolean;
}


const initialState: AuthState = {
   token: Cookies.get("token") || null,
   name: Cookies.get("name") || null,
   role: Cookies.get("role") || null,
   isAuthenticated: !!Cookies.get("token")
};


export default function authReducer(state = initialState, action: any): AuthState {
   switch (action.type) {
      case USER_LOGIN:
         return {
            ...state,
            token: action.payload?.token ?? null,
            name: action.payload?.name ?? null,
            role: action.payload?.role ?? null,
            isAuthenticated: true
         }
      case USER_LOGOUT:
         return initialState
      default:
         return state
   }
}