var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var form = require('./routes/form');
const app = express();
let session = require("express-session");
const flash = require("connect-flash");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(
  session({
    name : "response",
    secret: "ucodeit123",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 3000,
    },
  })
);

app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/formulario', form);
// catch 404 and forward to error handl
module.exports = app;
