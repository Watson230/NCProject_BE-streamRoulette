
const express = require('express');
const router = express.Router();



const queriesCtrl = require("../controllers/queriesCtrl")
const userCtrl = require("../controllers/userCtrl")


console.log('api router')

// router.get('/', );

//queries//
router.post('/search/:username/queries', queriesCtrl.postQueries )

//getRecentQueries//

// router.get('/search/:username/queries', queriesCtrl.getRecentQueries)


// user //

// router.get('/user/:id'userCtrl)
 router.post('/user', userCtrl.postUser)

 router.put('/search/results/:id/liked', userCtrl.addLikedFilm)

 router.put('/search/results/:id/Disliked', userCtrl.addDislikedFilm)

 router.put('/search/results/:id/watched', userCtrl.addWatchedFilm)



//films//

module.exports = {router}



