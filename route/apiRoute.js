
const express = require('express');
const router = express.Router();



const queriesCtrl = require("../controllers/queriesCtrl")
const userCtrl = require("../controllers/userCtrl")
const filmCtrl = require("../controllers/filmCtrl")


console.log('api router')

// router.get('/', );

//queries//
router.post('/search/:userName/queries', queriesCtrl.postQueries)

//getRecentQueries//

// router.get('/search/:username/queries', queriesCtrl.getRecentQueries)

router.get('/film/find/:id', filmCtrl.findFilm)

router.get('/film/liked', filmCtrl.getLikedFilms)

router.get('/film/disliked', filmCtrl.getDislikedFilms)

router.put('/film/:id/likes', filmCtrl.updateFilmLikes)
router.put('/film/:id/dislikes', filmCtrl.updateFilmDisikes)

router.post(`/film`, filmCtrl.postFilm)
// user //

// router.get('/user/:id', userCtrl.watchedFilms)

router.post('/user', userCtrl.postUser)

router.get('/user/:userName', userCtrl.getUser)

router.put('/search/results/liked/:id', userCtrl.addLikedFilm)

router.put('/search/results/disliked/:id', userCtrl.addDislikedFilm)

router.put('/search/results/:id/watched', userCtrl.addWatchedFilm)



//films//

module.exports = { router }



