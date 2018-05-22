const express = require('express');
const router = express.Router();

const {findFilm,postFilm,updateFilmDisikes,updateFilmLikes,
    getDislikedFilms,getLikedFilms,getMostWatchedFilms} = require('../controllers/filmCtrl');


router.get('/find/:id', findFilm);

router.get('/liked', getLikedFilms);

router.get('/disliked', getDislikedFilms);

router.get('/watched', getMostWatchedFilms);

router.put('/:id/likes', updateFilmLikes);
router.put('/:id/dislikes', updateFilmDisikes);

router.post('', postFilm);


module.exports={router};