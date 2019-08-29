var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors')
//require('./fixtures/index')();
var check = require('./routes/check');

app.use(cors())

app.use('/check', check);

module.exports = app;