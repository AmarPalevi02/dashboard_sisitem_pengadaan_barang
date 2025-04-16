import { SET_ALERT, CLEAR_ALERT } from "./constans";


export const setAlert = (
   message: string,
   alertType: "success" | "error" | "warning"
) => ({
   type: SET_ALERT,
   payload: { message, alertType },
});

export const clearAlert = () => ({
   type: CLEAR_ALERT,
});