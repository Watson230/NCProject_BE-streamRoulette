const userModal = require("../modal/user")
const filmModal = require("../modal/flim")



function postUser(req, res, next) {
    const user = userModal({
        userName: req.body.userName,
        likedFilms: [],
        disLikedFilms: [],
        watchedFilms: []
    })
        .save().then(user => {
            res.status(200).send(user)
        })
        .catch(err => {
            console.log(err);
            return next(err)

        })
}

function getUser(req, res, next) {
    let user = req.params.userName
    userModal.find({ 'userName': user })
        .then(user => {
            console.log(user)
            res.status(200).send(user)
        })
        .catch(err => {
            console.log(err);
            return next(err)

        })


}

function addLikedFilm(req, res,next) {

    let user = req.params.id
    let film = req.body.film

    userModal.findOneAndUpdate({ 'userName': user }, { $push: { likedFilms: film } }, { returnNewDocument: true })
        .then(user => {
            res.status(200).send(user)
        })
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { likes: 1 } }, { 'new': true }))
        .catch(err => {    
            return next(err)
        })



}

function addDislikedFilm(req, res,next) {

    let user = req.params.id
    let film = req.body.film

    userModal.findOneAndUpdate({ 'userName': user }, { $push: { dislikedFilms: film } }, { returnNewDocument: true })
        .then(user => res.status(200).send(user))
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { disLikes: 1 } }, { 'new': true }))
        .catch(err => {   
            return next(err)
        })
}

function addWatchedFilm(req,res,next) {
    let user = req.params.id
    let film = req.body.film
    userModal.findOneAndUpdate({ 'userName': user }, { $push: { watchedFilms: film } }, { returnNewDocument: true })
        .then(user => {
            res.status(200).send(user)
        })
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { watched: 1 } }, { 'new': true }))
        .catch(err => {   
            return next(err)
        })
}

module.exports = { postUser, addLikedFilm, addDislikedFilm, addWatchedFilm, getUser }