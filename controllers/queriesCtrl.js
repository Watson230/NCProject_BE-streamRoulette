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
        if (err.name === 'CastError') return next({ status: 404, msg: `user ${user} does not exist` });  
        return next(err)
    })
}




module.exports={postQueries}