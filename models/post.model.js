const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
           
        },
        service : {
            type: String,
            required: true,
           
        },
        adresse: {
            type: String,
            required: true,
           
        },
        phone: {
            type: Number,
            required: true,
           
        },  

    },
    {
        timestamps: true,
    }
);


const PostSchema = mongoose.model('post', postSchema);

module.exports = PostSchema;