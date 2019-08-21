const express = require('express');
const path = require('path');
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserDataService = require('./services/user.data.services');

// Load environment variables from .env
dotenv.config();

// Create the express app
const app = express();

// Hydrate environment settings
const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env === 'development';

passport.use('local', new LocalStrategy(
  function (username, password, done) {
    return done(null, {"_id": "123456"});
    // console.log('searching for user: ' + username);
    // // Lookup a user
    // new UserDataService().login(username, password).then(user => {
    //   if (!user) {
    //     console.log('no user...');
    //     return done(null, false, {message: 'Incorrect username or password.'});
    //   } else {
    //     console.log('wahoo!');
    //     return done(null, user);
    //   }
    // }, err => {
    //   console.log('aw snap...');
    //   return done(err)
    // });
  }));

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  console.log('making a user: ' + user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log('whacking a user: ' + user);
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());


// view engine setup
app.engine('hbs', exphbs({
  extname: 'hbs', defaultLayout: 'main.hbs', layoutsDir: 'views/layouts/', helpers: {
    // Found at https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional?noredirect=1&lq=1
    ifCond: function (v1, operator, v2, options) {

      switch (operator) {
        case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
          return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
          return options.inverse(this);
      }
    }
  }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(require('cookie-parser')());
app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
// Handle auth failure error messages
// app.use(flash());
// app.use(function (req, res, next) {
//   if (req && req.query && req.query.error) {
//     req.flash('error', req.query.error);
//   }
//   if (req && req.query && req.query.error_description) {
//     req.flash('error_description', req.query.error_description);
//   }
//   next();
// });

// app.use(userInViews());
app.get('/login', (req, res) => {
  console.log('opening...');
  res.render('login', {title: 'PHE Logs'});
});
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/users' },
    function(req, res) {
      console.log('passed...' + JSON.stringify(req));
      res.redirect('/users/' + req.user.username);
    }));
app.get('/logout',
  function(req, res){
    console.log('logging out...');
    req.logout();
    res.redirect('/');
  });
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/foods', require('./routes/foods'));
app.use('/records', require('./routes/records'));
app.use('/logfood', require('./routes/logfood'));
app.use('/register', require('./routes/register'));
app.use('/account', require('./routes/account'));


// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
