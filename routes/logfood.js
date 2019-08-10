const express = require('express');
const router = express.Router();

const context = {
  title: 'PHE Logs',
  target_phe: 800,
  daily_total: 623,
  remaining_goal: 177
};

/* GET home page. */
router.get('/', (req, res) => {
  res.render('logfood', context );
});

module.exports = router;
