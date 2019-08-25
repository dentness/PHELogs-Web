const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const passport = require('passport');
const auth = require('./routes/auth_local');

// Load environment variables from .env
dotenv.config();

// Create the express app
const app = express();

// Hydrate environment settings
const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env === 'development';

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

app.use(require('connect-flash')());
app.use(require('morgan')('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat' }, resave=true, saveUninitialized=false));

passport.use(auth.name, auth.strategy);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    auth.findById(id, function(err, user) {
    done(err, user);
  });
});

// Setup routes
app.use('/', auth.routes);
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/foods', require('./routes/foods'));
app.use('/records', require('./routes/records'));
app.use('/logfood', require('./routes/logfood'));
app.use('/register', require('./routes/register'));
app.use('/account', require('./routes/account'));
app.use('/register', require('./routes/register'));


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
