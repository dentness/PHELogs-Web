class FoodDataService {

  constructor() {
    this.foods = [
      {
        id: '123412341234',
        name: 'Bread',
        phe_multiplier: 1.32,
        source: {id: '10313801803', name: 'USDA', public: true},
        updated_on: '10/20/2018'
      },
      {
        id: '483974982374',
        name: 'Carrots',
        phe_multiplier: 0.33,
        source: {id: '10313801803', name: 'USDA', public: true},
        updated_on: '01/25/2017'
      },
      {
        id: '089489289284',
        name: 'Potatoes',
        phe_multiplier: 0.5,
        source: {id: '10313801803', name: 'USDA', public: true},
        updated_on: '03/20/2018'
      },
      {
        id: '483881881880',
        name: 'Milk',
        phe_multiplier: 4.2,
        source: {id: '12332987198273', name: 'USER', public: true},
        updated_on: '04/09/2006'
      },
      {
        id: '9393939933',
        name: 'Ice Cream',
        phe_multiplier: 9.2,
        source: {id: '123', name: 'USER', public: true},
        updated_on: '04/09/2006'
      }
    ];
  }

  get_food_list() {
    return this.foods;
  }

  find_foods(name) {

  }
}

module.exports = FoodDataService;
