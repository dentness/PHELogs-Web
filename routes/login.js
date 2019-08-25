const express = require('express');
const router = express.Router();


/* GET about page. */
router.get('/', (req, res) => {
  res.render('login', {title: 'PHE Logs', user: req.user});
});

router.post('/',
  passport.authenticate('local',
    {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: false
    })
);

module.exports = router;
