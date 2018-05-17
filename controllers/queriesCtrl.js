const queriesModel = require('../modal/queries')



function postQueries(req,res,next){
   
    let userName = req.params.userName

    const query = queriesModel({
        userName:userName,
        genre:req.body.queries.genre,
        keywords:req.body.queries.keywords,
        releaseYear: req.body.queries.year,
    }).save().then(newQuery =>{res.status(200).send(newQuery)})
    .catch(err => {
        console.log(err);
        return next(err)

    })
}




module.exports={postQueries}