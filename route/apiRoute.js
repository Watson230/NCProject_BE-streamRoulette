const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const filmRoute =  require('./filmRoute');
const searchRoute = require('./searchRoute');

// router.get('/', );


router.use('/film',filmRoute);
router.use('/search', searchRoute);
router.use('/user', userRoute);







module.exports = { router };



