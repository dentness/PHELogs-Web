const axios = require('axios');

class FoodDataService {

  constructor( URL ){
    this.DATA_URL = URL;
  }

  get_food_list() {
      return axios.get(this.DATA_URL + '/foods');
  }

  find_foods(name) {
    return axios.get(this.DATA_URL + '/foods/findFoodsByDesc/' + name);
  }
}

module.exports = FoodDataService;
