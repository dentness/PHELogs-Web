const express = require('express');
const router = express.Router();

/* GET foods page. */
router.get('/', (req, res) => {
  res.render('foods', { title: 'PHE Logs' });
});

module.exports = router;
