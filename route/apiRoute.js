const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute').router;
const filmRoute =  require('./filmRoute').router;
const searchRoute = require('./searchRoute').router;

// router.get('/', );


router.use('/film', filmRoute);
router.use('/search', searchRoute);
router.use('/user', userRoute);







module.exports = { router };



