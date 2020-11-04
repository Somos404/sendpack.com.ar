import axios from "axios"
import API_URL from "../constant/apiUrl"

class AuthService {

  login(email, password) {
    console.log('oO ===========================');
    return axios
      .post(API_URL + "users/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.ok) {
          localStorage.removeItem("user");
          localStorage.removeItem("userfecha");
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userfecha", new Date());
        }

        return response.data;
      });
  }

  googleFacebookHandler(respuesta){
    try {
      const body = {
          'email': respuesta.profileObj.email,
          'name': respuesta.profileObj.givenName,
          'apellido': respuesta.profileObj.familyName,
          'password': respuesta.profileObj.googleId
      }

      return axios.post(API_URL +'/users/logReg',
        body
      ).then(response => {

          if(response.data.ok){
            localStorage.removeItem("user");
            localStorage.removeItem("userfecha");
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("userfecha", new Date());
          }

          return response.data;
      })

    } catch (error) {
      console.log('error: ',error);
    }
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userfecha");
  }

  register(body) {
    return axios.post(API_URL + "users/register", {
      body
    }).then(response => {

      if(response.data.ok){
        localStorage.removeItem("user");
        localStorage.removeItem("userfecha");
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("userfecha", new Date());
      }
      return response.data;
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()