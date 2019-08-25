const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserDataService = require('../services/user.data.services');
const router = express.Router();

const auth_name = exports.name = 'local';

exports.strategy = new LocalStrategy(
  function (username, password, done) {
  // Lookup a user
    UserDataService.login(username, password).then(user => {
      if (!user.data) {
        return done(new Error('Incorrect username or password.'), false, {message: 'Incorrect username or password.'});
      } else {
        return done(null, user.data);
      }
    }, err => {
      console.log('aw snap...');
      return done(err)
    });
  });

exports.findById = (id, done)  => {
  UserDataService.findById(id).then(user => {
    if (!user) {
      console.log('Cannot find user with ID: ' + id);
      return done(new Error('Cannot find user'), false, 'Cannot find user' );
    } else {
      return done(null, user.data);
    }
  });
};

router.get('/login', (req, res) => {
  res.render('login', {title: 'PHE Logs'});
});


router.post("/login",
  function(req,res,next){
    passport.authenticate(auth_name, { successRedirect: '/' , failureRedirect: '/login' },function(err, user, info) {
      // handle success or failure
      if (err) {
        console.log(err);
        return next(err);
      } else {
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          res.redirect('/');
        });
      }
    })(req,res,next);
  });

router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

exports.routes = router;



