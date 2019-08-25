const express = require('express');
const FoodDataService = require('../services/food.data.service');
const router = express.Router();

/* GET foods page. */
router.get('/', (req, res) => {
  FoodDataService.get_food_list().then(result => {
    res.render('foods', {title: 'PHE Logs', user: req.user, food: result.data, edit_url: req.originalUrl + '/remove'});
  });
});

router.post('/', (req, res) => {
  const foodName = req.body.foodName || "";
  FoodDataService.find_foods(foodName).then(result => {
    res.render('foods', {title: 'PHE Logs', user: req.user, food: result.data, edit_url: req.originalUrl + '/remove'});
  });
});

module.exports = router;
