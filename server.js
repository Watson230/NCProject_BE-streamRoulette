if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
require('dotenv').config({
  path: `./.${process.env.NODE_ENV}.env`
});

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var cors = require('cors')
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
mongoose.Promise = Promise;


function mongooseConnect() {


    return mongoose.connect(process.env.DB_URI)
        .then(() => console.log(`successfully connected to ${process.env.NODE_ENV} database`))
        .catch(err => console.log('connection failed', err));

}


app.use(cors())

app.use(bodyParser.json());

module.exports = { app, mongooseConnect };