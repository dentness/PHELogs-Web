const express = require('express');
const router = express.Router();
const FoodDataService = require('../services/food.data.service');
const RecordDataService = require('../services/record.data.service');

const context = {
  title: 'PHE Logs',
  target_phe: 800,
  daily_total: 623,
  remaining_goal: 177
};

/* GET home page. */
router.get('/', (req, res) => {
  const rs = new RecordDataService();
  const record = rs.get_todays_record();

  res.render('logfood', { title: 'PHE Logs', record: record, tot_board: rs.calc_tot_board(record) } );
});

module.exports = router;
