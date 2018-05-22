const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  
    userName: {
        type: String,
        required: true
    },

    likedFilms:{
        type:Array,
        required:false,
        default:[]
    },

    dislikedFilms:{
        type:Array,
        required:false,
        default:[]
    },

    watchedFilms:{
        type:Array,
        required:false,
        default:[]
    }

});

module.exports = mongoose.model('user', userSchema);