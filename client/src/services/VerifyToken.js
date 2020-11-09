import moment from 'moment';

export default function authHeader() {

  if(localStorage.getItem("userfecha") && localStorage.getItem("user")){
   if( moment(localStorage.getItem("userfecha")).add(1, 'days').diff(moment()) > 0 ){
      return true
   }
   localStorage.removeItem("user");
   localStorage.removeItem("userfecha");
  }
  return false;
}