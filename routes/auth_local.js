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
        return done(null, user.data);
      }
    }, err => {
      console.log('aw snap...');
      return done(err)
    });
  });

router.get('/login', (req, res) => {
  console.log('show login...');
  res.render('login', {title: 'PHE Logs'});
});

// router.post('/login',
//   passport.authenticate('local', function(req, res, next) {
//     console.log('passed...');
//     res.redirect('/');
//   })(req, res, next));
router.post("/login",
  function(req,res,next){
    console.log(req.body);
    passport.authenticate(auth_name, { successRedirect: '/' , failureRedirect: '/login' },function(err, user, info) {
      // handle succes or failure
      console.log('authentication...');
      if (err) {
        console.log(err);
        return next(err);
      // }
      // if (!user) {
      //   console.log('No user found...');
      //   res.redirect('/login');
      } else {
        console.log('success! - User: ' + JSON.stringify(user));
        res.redirect('/');
      }
    })(req,res,next);
  });

router.get('/logout',
  function(req, res){
    console.log('logging out...');
    req.logout();
    res.redirect('/');
  });

exports.routes = router;



