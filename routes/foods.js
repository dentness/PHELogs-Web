const express = require('express');
const FoodDataService = require('../services/food.data.service');
const router = express.Router();

/* GET foods page. */
router.get('/', (req, res) => {
  var foodlist = new FoodDataService().get_food_list();
  res.render('foods', { title: 'PHE Logs', food: foodlist, edit_url: req.originalUrl + '/remove' });
});

module.exports = router;
