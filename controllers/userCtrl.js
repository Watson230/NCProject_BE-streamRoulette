const usermodal = require("../modal/user")




function postUser(req,res){
    console.log(req.body.userName)
    console.log('post user')
    const user = usermodal({
        userName:req.body.userName,
        likedFilms:[],
        disLikedFilms:[],
        watchedFilms:[]
    }).save().then(user =>{
            console.log('newUser',user)
        
        res.status(200).send(user)})
    .catch(err => {
        console.log(err);
        return res.status(500).send({ error: err })

    })



}


function addLikedFilm(req,res){

    let user = req.params.username
    let film = req.body.film

    usermodal.findOneAndUpdate({'username':user},{ $push: { likedFilms: film } }, { returnNewDocument: true })
    .then(user => res.status(200).send(user))
    .catch(err => {
        console.log(err);
        return res.status(500).send({ error: err })

    })


}

function addDislikedFilm(req,res){
    let user = req.params.username
    let film = req.body.film

    usermodal.findOneAndUpdate({'username':user},{ $push: { disLikedFilms: film } }, { returnNewDocument: true })
    .then(user => res.status(200).send(user))
    .catch(err => {
        console.log(err);
        return res.status(500).send({ error: err })

    })
}

function addWatchedFilm(req,res){
    let user = req.params.username
    let film = req.body.film

    usermodal.findOneAndUpdate({'username':user},{ $push: { watchedFilms: film } }, { returnNewDocument: true })
    .then(user => res.status(200).send(user))
    .catch(err => {
        console.log(err);
        return res.status(500).send({ error: err })

    })
}





module.exports = {postUser,addLikedFilm,addDislikedFilm, addWatchedFilm}