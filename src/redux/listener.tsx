import store from './store';
import Cookies from 'js-cookie'

let currentAuth: any;

function listener() {
   let previousAuth = currentAuth;
   currentAuth = store.getState().auth;

   if (currentAuth !== previousAuth) {
      if (currentAuth.isAuthenticated) {
         Cookies.set("token", currentAuth.token || "", { expires: 1 / 720 });
         Cookies.set("name", currentAuth.name || "", { expires: 1 / 720 });
         Cookies.set("role", currentAuth.role || "", { expires: 1 / 720 });
      } else {
         Cookies.remove("token");
         Cookies.remove("name");
         Cookies.remove("role");
      }
   }
}

function listen() {
   store.subscribe(listener);
}

export { listen };
