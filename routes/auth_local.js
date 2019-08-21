const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserDataService = require('../services/user.data.services');
const router = express.Router();

const auth_name = exports.name = 'local';

exports.strategy = new LocalStrategy(
  function (username, password, done) {
    console.log('searching for user: ' + username);
  // Lookup a user
    new UserDataService().login(username, password).then(user => {
      if (!user) {
        console.log('no user...');
        return done(null, false, {message: 'Incorrect username or password.'});
      } else {
        console.log('wahoo!');
        return done(null, user);
      }
    }, err => {
      console.log('aw snap...');
      return done(err)
    });
  });

router.get('/login', (req, res) => {
  res.render('login', {title: 'PHE Logs'});
});

router.post('/login',
  passport.authenticate(auth_name, { failureRedirect: '/login' }),
  function(req, res) {
    console.log('passed...');
    res.redirect('/');
  });

router.get('/logout',
  function(req, res){
    console.log('logging out...');
    req.logout();
    res.redirect('/');
  });

exports.router = router;



