const express = require('express');
const router = express.Router();
const RecordDataService = require('../services/record.data.service');

/* GET home page. */
router.get('/', (req, res) => {
  RecordDataService.get_diet_record(req.user.current_diet_record).then(record => {
    if (!record) {
      // Create new current diet record for user
    }
    res.render('logfood', {
      title: 'PHE Logs',
      user: req.user,
      record: record.data,
      tot_board: RecordDataService.calc_tot_board(record.data)
    });
  })
});

module.exports = router;
