const express = require('express');
const router = express.Router();



const queriesCtrl = require("../controllers/queriesCtrl")
const userCtrl = require("../controllers/userCtrl")


console.log('api router')

router.get('/', );

//queries//
router.post('/search/:username/queries', queriesCtrl.postQueries )

//getRecentQueries//

// router.get('/search/:username/queries', queriesCtrl.getRecentQueries)


// user //
 router.post('/user', userCtrl.postUser)

 router.put('/search/results/:username/liked', userCtrl.addLikedFilm)

 router.post('/search/results/:username/Disliked', userCtrl.addDislikedFilm)

 router.post('/search/results/:username/watched', userCtrl.addWatchedFilm)



//films//

module.exports = {router}



