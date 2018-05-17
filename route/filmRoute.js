const express = require('express');
const router = express.Router();

const {findFilm,postFilm,updateFilmDisikes,updateFilmLikes,
    getDislikedFilms,getLikedFilms,getMostWatchedFilms} = require('../controllers/filmCtrl')


router.get('/find/:id', filmCtrl.findFilm)

router.get('/liked', filmCtrl.getLikedFilms)

router.get('/disliked', filmCtrl.getDislikedFilms)

router.get('/watched', filmCtrl.getMostWatchedFilms)

router.put('/:id/likes', filmCtrl.updateFilmLikes)
router.put('/:id/dislikes', filmCtrl.updateFilmDisikes)

router.post(``, filmCtrl.postFilm)


 module.exports={router}