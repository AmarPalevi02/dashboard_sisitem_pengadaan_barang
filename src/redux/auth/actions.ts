import { USER_LOGIN } from "./constans";

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