const filmModal = require("../modal/flim")

function postFilm(req, res, next) {

    const film = filmModal({
        title: req.body.film.title,
        id: req.body.film.id,
        likes: 0,
        disLikes: 0,
        watched:0,
        film: req.body.film
    })
        .save().then(film => {
            console.log('filmpost', film)
            return res.status(200).send(film)
        })
        .catch(err => {
            if (err.name === 'ValidationError') return next({status: 400, msg: `${err.errors.body.message} no film object sent in request body`});
            return next(err)
        })
}

function findFilm(req, res, next) {

    let filmId = req.params.id
    console.log(filmId)

    filmModal.find({ 'id': filmId })
        .then(film => {
            console.log('find found', film)
            return res.status(200).send(film)
        })
        .catch(err => {
            if (err.name === 'CastError') return next({ status: 404, msg: `film ${filmId} does not exist` });
            return next(err)
        })

}

function updateFilmLikes(req, res, next) {
    let filmId = req.params.id
    filmModal.findOneAndUpdate({ 'id': filmId}, { $inc: { likes: 1 } }, { 'new': true })
        .then(film => {
            return res.status(200).send(film)
        })
        .catch(err => {
            if (err.name === 'CastError') return next({ status: 404, msg: `film ${filmId} does not exist` });
            return next(err)
        })
}

function updateFilmDisikes(req, res, next) {

    let filmId = req.params.id

    filmModal.findOneAndUpdate({ 'id': filmId }, { $inc: { disLikes: 1 } }, { 'new': true })
        .then(film => {
           return res.status(200).send(film)
        })
        .catch(err => {
            if (err.name === 'CastError') return next({ status: 404, msg:`film ${filmId} does not exist` });
            return next(err)
        })

}

function getLikedFilms (req,res, next){

    filmModal.find({}).sort({likes:-1}).limit(10)
    .then(films => { 
        return res.status(200).send(films)
    })
    .catch(err => {
        return next(err)
    })
}

function getDislikedFilms (req,res,next){

    filmModal.find({}).sort({disLikes:-1}).limit(10)
    .then(films => {
        return res.status(200).send(films)
    })
    .catch(err => {     
        return next(err)
    })

}

function getMostWatchedFilms (req,res){
    filmModal.find({}).sort({watched:-1}).limit(10)
    .then(films => {    
        return res.status(200).send(films)
    })
    .catch(err => {  
        return next(err)
    })
}






module.exports = { findFilm, postFilm, updateFilmLikes, updateFilmDisikes, getLikedFilms, getDislikedFilms, getMostWatchedFilms}