const axios = require('axios');

class UserDataService {

  static login(username, password) {
    return axios.get(process.env.DATA_URL + '/users/login/' + username + '/' + password);
  }

  static findById(id) {
    return axios.get(process.env.DATA_URL + '/users/' + id);
  }

  static register(user) {
    console.log('calling register API');
    return axios.post(process.env.DATA_URL + '/users', user);
  }

  static update(user) {
    return axios.put(process.env.DATA_URL + '/users', user);
  }
}

module.exports = UserDataService;
