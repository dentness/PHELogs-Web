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
});

module.exports = router;
