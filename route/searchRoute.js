const express = require('express');
const router = express.Router();

const {postQueries}= require('../controllers/queriesCtrl')
const { addWatchedFilm,addLikedFilm,addDislikedFilm} =require('../controllers/userCtrl')



router.put('/results/liked/:id', addLikedFilm)

router.put('/results/disliked/:id', addDislikedFilm)

router.put('/results/:id/watched', addWatchedFilm)

router.post('/:userName/queries', postQueries)



module.exports={router}