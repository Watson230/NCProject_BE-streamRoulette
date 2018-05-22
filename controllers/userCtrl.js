const userModal = require('../modal/user');
const filmModal = require('../modal/flim');



function postUser(req, res, next) {
    const user = userModal({
        userName: req.body.userName,
        likedFilms: [],
        disLikedFilms: [],
        watchedFilms: []
    })
        .save().then(user => {
            return  res.status(200).send(user);
        })
        .catch(err => {
            if (err.name === 'ValidationError') return next({status: 400, msg: `${err.errors.body.message} no user name req params`});
            if (err.name === 'CastError') return next({ status: 404, msg: 'unknown erros has occured' });
            return next(err);
        });
}

function getUser(req, res, next) {
    const user = req.params.userName;
    userModal.find({ 'userName': user })
        .then(user => {
            return res.status(200).send(user);
        })
        .catch(err => {    
            if (err.name === 'CastError') return next({ status: 404, msg: `User ${user} does not exist` });
            return next(err);
        });
}

function addLikedFilm(req, res,next) {

    let user = req.params.id;
    let film = req.body.film;

    userModal.findOneAndUpdate({ 'userName': user }, { $push: { likedFilms: film } }, { returnNewDocument: true })
        .then(user => {
            res.status(200).send(user);
        })
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { likes: 1 } }, { 'new': true }))
        .catch(err => {  
            if (err.name === 'CastError') return next({ status: 404, msg: `user ${user} does not exist` });  
            return next(err);
        });
}

function addDislikedFilm(req, res,next) {

    let user = req.params.id;
    let film = req.body.film;

    userModal.findOneAndUpdate({ 'userName': user }, { $push: { dislikedFilms: film } }, { returnNewDocument: true })
        .then(user => res.status(200).send(user))
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { disLikes: 1 } }, { 'new': true }))
        .catch(err => {   
            if (err.name === 'CastError') return next({ status: 404, msg: `user ${user} does not exist` });  
            return next(err);
        });
}

function addWatchedFilm(req,res,next) {
    let user = req.params.id;
    let film = req.body.film;
    userModal.findOneAndUpdate({ 'userName': user }, { $push: { watchedFilms: film } }, { returnNewDocument: true })
        .then(user => {
            res.status(200).send(user);
        })
        .then(() => filmModal.findOneAndUpdate({ 'title': film.title }, { $inc: { watched: 1 } }, { 'new': true }))
        .catch(err => {  
            if (err.name === 'CastError') return next({ status: 404, msg: `user ${user} does not exist` }); 
            return next(err);
        });
}

module.exports = { postUser, addLikedFilm, addDislikedFilm, addWatchedFilm, getUser };