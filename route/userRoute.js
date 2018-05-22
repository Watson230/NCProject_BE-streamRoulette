const express = require('express');
const router = express.Router();

const{postUser,getUser}= require('../userCtrl');

router.post('', postUser);

router.get('/:userName', getUser);

module.exports={router};