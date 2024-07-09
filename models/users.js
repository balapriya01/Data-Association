//Database
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/data");

//Schema
const userdetail = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    posts: [{
        //We can call this as a type of id that we are passing.
        //_id type is mongoose.Schema.Types.ObjectId
        //ref: to which model we are refering this to. Simple done.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],

})

//model
module.exports = mongoose.model("user", userdetail);
