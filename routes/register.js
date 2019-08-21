const express = require('express');
const router = express.Router();

/* GET about page. */
router.get('/', (req, res) => {
  res.render('register', { title: 'PHE Logs' });
});

router.post('/', (req, res) => {
  console.log("Registering: " + req.params.first_name);
  console.log("req.params: " + JSON.stringify(req.params));
  const user = {
    "first_name": req.params.firstName,
    "last_name": req.params.lastName,
    "email": req.params.email,
    "password": req.params.password
  };
  new UserDataService( ).register(user).then(result => {
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
