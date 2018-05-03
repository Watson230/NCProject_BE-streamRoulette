const userModal = require("../modal/user")
const filmModal = require("../modal/flim")



function postUser(req, res) {
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
            return res.status(500).send({ error: err })

        })
}

function getUser(req, res) {
    let user = req.params.userName
    userModal.find({ 'userName': user })
        .then(user => {
            console.log(user)
            res.status(200).send(user)
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({ error: err })

        })


}

function addLikedFilm(req, res) {

    let user = req.params.id
    let film = req.body.film

    userModal.findOneAndUpdate({ 'userName': user }, { $push: { likedFilms: film } }, { returnNewDocument: true })
        .then(user => {

            res.status(200).send(user)
        })
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { likes: 1 } }, { 'new': true }))
        .catch(err => {
            console.log(err);
            return res.status(500).send({ error: err })
        })



}

function addDislikedFilm(req, res) {

    let user = req.params.id
    let film = req.body.film

    console.log(user)
    console.log(film)
    userModal.findOneAndUpdate({ 'userName': user }, { $push: { dislikedFilms: film } }, { returnNewDocument: true })
        .then(user => res.status(200).send(user))
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { disLikes: 1 } }, { 'new': true }))
        .catch(err => {
            console.log(err);
            return res.status(500).send({ error: err })

        })
}

function addWatchedFilm(req, res) {
    let user = req.params.id
    let film = req.body.film

    console.log('addwatcheduser', user)
    console.log('addwatchedfilm', film)
    userModal.findOneAndUpdate({ 'userName': user }, { $push: { watchedFilms: film } }, { returnNewDocument: true })
        .then(user => {
            console.log(user)
            res.status(200).send(user)
        })
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { watched: 1 } }, { 'new': true }))
        .catch(err => {
            console.log(err);
            return res.status(500).send({ error: err })

        })
}





module.exports = { postUser, addLikedFilm, addDislikedFilm, addWatchedFilm, getUser }