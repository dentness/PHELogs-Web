const express = require('express');
const router = express.Router();

/* GET about page. */
router.get('/', (req, res) => {
  res.render('account', { title: 'PHE Logs' });
});

module.exports = router;
