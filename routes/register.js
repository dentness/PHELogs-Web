const express = require('express');
const router = express.Router();

/* GET about page. */
router.get('/', (req, res) => {
  res.render('register', { title: 'PHE Logs' });
});

module.exports = router;
