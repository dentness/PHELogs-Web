class FoodDataService {

  constructor() {
    this.foods = require('./static_data').getStaticFoods();
  }

  get_food_list() {
    return this.foods;
  }

  find_foods(name) {

  }
}

module.exports = FoodDataService;
