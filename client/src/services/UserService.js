import axios from 'axios'
import authHeader from './AuthHeader'
import API_URL from '../constant/apiUrl'

class UserService {

  sendMails(body) {
    try {
      return axios.post(API_URL + 'mail/send', {authHeader},
        body
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }
}
export default new UserService();