const express = require('express');
const FoodDataService = require('../services/food.data.service');
const router = express.Router();

let foods = [];

function filterFoods(description) {

}

/* GET foods page. */
router.get('/', (req, res) => {
  new FoodDataService().get_food_list().then(result => {
    res.render('foods', {title: 'PHE Logs', user: req.user, food: result.data, edit_url: req.originalUrl + '/remove'});
  });
});

module.exports = router;
