const axios = require('axios');

class FoodDataService {

  get_food_list() {
      return axios.get(process.env.DATA_URL + '/foods');
  }

  find_foods(name) {
    return axios.get(proces.env.DATA_URL + '/foods/findFoodsByDesc/' + name);
  }
}

module.exports = FoodDataService;
