import axios from "axios"
import API_URL from "../constant/apiUrl"

class AuthService {

  login(email, password) {
    try {
      const body = {
        'email': email,
        'password': password
      }
      return axios.post(API_URL + 'users/login',
        body
      ).then(response => {
        if (response.data.ok) {
          localStorage.removeItem("user");
          localStorage.removeItem("userfecha");
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userfecha", new Date());
        }

        return response.data;
      })

    } catch (error) {
      console.log('error: ', error);
    }
  }

  googleFacebookHandler(respuesta) {
    try {
      const body = {
        'email': respuesta.profileObj.email,
        'name': respuesta.profileObj.givenName,
        'last_name': respuesta.profileObj.familyName,
        'password': respuesta.profileObj.googleId
      }

      return axios.post(API_URL + '/users/logReg',
        body
      ).then(response => {

        if (response.data.ok) {
          localStorage.removeItem("user");
          localStorage.removeItem("userfecha");
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userfecha", new Date());
        }

        return response.data;
      })

    } catch (error) {
      console.log('error: ', error);
    }
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userfecha");
  }

  register(input) {

    try {
  
      return axios.post(API_URL + "users/register", {
        'email': input.email,
        'name': input.name,
        'last_name': input.last_name,
        'password': input.password
      }).then(response => {

        if (response.data.ok) {
          localStorage.removeItem("user");
          localStorage.removeItem("userfecha");
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userfecha", new Date());
        }
        return response.data;
      })

    } catch (error) {
      console.log('error: ', error);
    }
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()