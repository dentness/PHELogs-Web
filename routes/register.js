const express = require('express');
const UserDataService = require('../services/user.data.services');
const router = express.Router();

/* GET about page. */
router.get('/', (req, res) => {
  res.render('register', { title: 'PHE Logs' });
});

router.post('/', (req, res) => {
  console.log("Registering: " + req.body.firstName);
  console.log("req.params: " + JSON.stringify(req.body));
  const user = {
    "first_name": req.body.firstName,
    "last_name": req.body.lastName,
    "email": req.body.email,
    "password": req.body.password
  };
   UserDataService.register(user).then(result => {
    if (!result) {
      // Failed to login
      console.log("failed to register");
      res.redirect('/', 302);
    }
    else {
      // Success
      console.log("succeeded registering user");
      res.redirect('/', 302);
    }
  });
});

module.exports = router;
