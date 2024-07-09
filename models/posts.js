const mongoose = require("mongoose");

const postDetails = mongoose.Schema({

    postText:{
        type:String,
        required:true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
    
})

module.exports = mongoose.model('Post', postDetails);