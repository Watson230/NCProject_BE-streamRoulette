const queriesModel = require('../modal/queries')



function postQueries(req,res){
   

    let userName = req.params.userName

    const query = queriesModel({
        userName:userName,
        genre:req.body.queries.genre,
        title:req.body.queries.title,
        keywords:req.body.queries.keywords,
        rating: req.body.queries.rating,
        releaseYear: req.body.queries.year,
        director: req.body.queries.director,
        starring: req.body.queries.starring


       
    }).save().then(newQuery =>{res.status(200).send(newQuery)})
    .catch(err => {
        console.log(err);
        return res.status(500).send({ error: err })

    })


}


function getRecentQueries (req,res){




}


module.exports={postQueries}