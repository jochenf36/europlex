var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var contact = require('./routes/contact');
var about = require('./routes/about');

var stylus = require('stylus');
var nib = require('nib');
var i18n = require('i18n-2');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'assets', 'views'));
app.set('view engine', 'jade');

// stylus engine
app.use(stylus.middleware(
  { src: path.join(__dirname, 'assets')
  ,compile: compile
  }
))

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

i18n.expressBind(app, {
  // setup some locales - other locales default to en silently
    locales: ['en', 'nl', 'fr'],
    query: true,
});

function handlerLang(req, res, next){
  req.i18n.setLocaleFromCookie();
  next();
};


app.use('/', handlerLang);
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', routes);
app.use('/users', users);
app.use('/contact', contact);
app.use('/about', about);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

module.exports = app;
