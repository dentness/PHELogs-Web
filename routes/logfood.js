const express = require('express');
const router = express.Router();
const RecordDataService = require('../services/record.data.service');

const context = {
  title: 'PHE Logs',
  target_phe: 800,
  daily_total: 623,
  remaining_goal: 177
};

/* GET home page. */
router.get('/', (req, res) => {
  RecordDataService.get_diet_record(req.user.current_diet_record).then( record => {
    if (!record) {
      // Create new current diet record for user

    }
    res.render('logfood', {title: 'PHE Logs', user: req.user, food: record.food});
  })
});

module.exports = router;
