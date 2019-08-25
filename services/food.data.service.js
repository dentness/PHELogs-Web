const axios = require('axios');

class FoodDataService {

  static get_food_list() {
      return axios.get(process.env.DATA_URL + '/foods');
  }

  static find_foods(name) {
    return axios.get(process.env.DATA_URL + '/foods/findFoodsByDesc/' + name);
  }

  static get_food_by_id(id) {
    return axios.get( process.env.DATA_URL + '/foods/' + id);
  }
}

module.exports = FoodDataService;
