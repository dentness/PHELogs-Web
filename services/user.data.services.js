const axios = require('axios');

class UserDataService {

  login(username, password) {
    console.log('calling login API');
    return axios.get(process.env.DATA_URL + '/users/' + username + '/' + password);
  }

  register(user) {
    console.log('calling register API');
    return axios.post(process.env.DATA_URL + '/users', user);
  }

  update(user) {
    return axios.put(process.env.DATA_URL + '/users', user);
  }
}

module.exports = UserDataService;
