var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var generatorRouter = require('./routes/generator');
var setupRouter = require('./routes/setup');
var results = require('./routes/results');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(bodyParser.json())

app.use('/generate', generatorRouter);
app.use('/setup', setupRouter);
app.use('/result', results);

module.exports = app;
