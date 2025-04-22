import { USER_LOGIN, USER_LOGOUT } from "./constans";

export const userLogin = (
   token: string,
   name: string,
   role: string,
   isAuthenticated: boolean
) => {
   return {
      type: USER_LOGIN,
      payload: { token, name, role, isAuthenticated }
   };
};

export const userLogout = () => {
   return {
      type: USER_LOGOUT
   }
}