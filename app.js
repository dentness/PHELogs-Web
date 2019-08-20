const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const session = require('express-session');
const userInViews = require('./lib/middleware/userInViews');
var flash = require('connect-flash');
const dotenv = require('dotenv');
var Auth0Strategy = require('passport-auth0');
var passport = require('passport');
const secured = require('./lib/middleware/secured');

// Setup authentication: Auto0 + Passport
// Load environment variables from .env
dotenv.config();

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:' + process.env.PORT + '/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);



// Create the express app
const app = express();

// Hydrate environment settings
const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env === 'development';
app.locals.DATA_URL = process.env.DATA_URL || 'http://localhost:8080';

// config express-session
var sess = {
  secret: '85254423-525f-4178-97f4-ca0c381590a7',
  cookie: {},
  resave: false,
  saveUninitialized: true
};
if (app.get('env') === 'production') {
  sess.cookie.secure = true; // serve secure cookies, requires https
}
app.use(session(sess));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  console.log('making a user: ' + user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log('whacking a user: ' + user);
  done(null, user);
});
app.use(flash());

// Handle auth failure error messages
app.use(function (req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash('error', req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash('error_description', req.query.error_description);
  }
  next();
});

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

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
app.use(userInViews());
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/index'));
// app.use(secured());
app.use('/', require('./routes/users'));
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
