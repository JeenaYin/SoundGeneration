var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// So /lamejs is the mounting point of the /node_modules/lamejs/ directory.
app.use('/lamejs', express.static(__dirname + '/node_modules/lamejs/'));

// So /tone is the mounting point of the /node_modules/tone/ directory.
app.use('/tone', express.static(__dirname + '/node_modules/tone/'));

// So /tone is the mounting point of the /node_modules/tone/ directory.
app.use('/jQuery', express.static(__dirname + '/node_modules/jQuery/'));
app.use('/ffmpeg', express.static(__dirname + '/node_modules/ffmpeg/'));
app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("error from app: "+err.message);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
