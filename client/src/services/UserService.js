import axios from 'axios'
import authHeader from './AuthHeader'
import API_URL from '../constant/apiUrl'

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() })
  }
}

export default new UserService();