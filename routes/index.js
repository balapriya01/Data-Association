
//For the timing everything is static.

var express = require('express');
var router = express.Router();
const userModel = require('../models/users')
const postModel = require('../models/posts');


router.get('/', function(req, res) {
 res.send("Index")
});

//The user is being created
router.get('/createuser', async (req, res) => {
  const createdUser = await userModel.create({
    username: "Rapunzel",
    posts:[],
  })
  res.send(createdUser);
})

//Th post is being created
router.get('/createpost', async (req, res) => {
  const postCreated =  await postModel.create({
    postText: "This is my first post",
    user: "668d6e46ff604829f52feeb0"  // This is the id of the present user that is being created, do change it with your user's id.
  })

  //Post Id is being transfered to user.
  const user = await userModel.findOne({_id: "668d6e46ff604829f52feeb0"})
  user.posts.push(postCreated._id)
  await user.save();
  res.send("Done with creating the user, you can check your database");

})

//A simple command of finding all users.
router.get('/find', async (req, res) => {
  const findall = await userModel
  .find()  //Finding all users, but showing posts data as it's pid
  .populate('posts'); // Here after executing this, we will be able to see the real data being passed.
  res.send(findall);
})

module.exports = router;
