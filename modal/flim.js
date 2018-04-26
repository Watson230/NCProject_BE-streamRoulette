const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const filmSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    id:{
        type: String,
        required: true
    },

    film: {

        type: Object,
        required: true,

    },

    likes: {
        type: Number,
        required: false
    },

    disLikes: {
        type: Number,
        required: false
    }

})

module.exports = mongoose.model('film', filmSchema);