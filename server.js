if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
require('dotenv').config({
    path: `./.${process.env.NODE_ENV}.env`
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const apiRoute=require('./route/apiRoute').router;

mongoose.Promise = Promise;

mongoose.connect(process.env.DB_URI)
    .then(() => console.log(`successfully connected to ${process.env.NODE_ENV} database`))
    .catch(err => console.log('connection failed', err));


app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res)=>{  
    return res.status(200).sendfile(path.join(__dirname + '/endpointt.html'));
});

app.use('/api',apiRoute);
app.use((err, req, res, next) => {
    if (err.status === 400) return res.status(400).send(`${err.msg}`);
    if (err.status === 404) return res.status(404).send(`${err.msg}`);
    next();
});

app.use((err, req, res) => {
    return res.status(500).send('500 - An unknown error has occurred ');
});


module.exports = {app};