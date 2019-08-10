const express = require('express');
const router = express.Router();


const context = {
  title: 'PHE Logs',
  target_phe: 800,
  daily_total: 623,
  remaining_goal: 177
};


/* GET records page. */
router.get('/', (req, res) => {
  res.render('records', { title: 'PHE Logs' });
});

/* GET record_details page. */
router.get('/details', (req, res) => {
  res.render('record_details', context );
});



module.exports = router;
