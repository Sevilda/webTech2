const express = require('express');
const mongoose = require('mongoose');
const userRoute = express.Router();
const Users = require('../model/User');


// get user
userRoute.route("/users").get((req, res) => {
    Users.find().then(data => {
        try { res.json(data) }
        catch (err) { console.log(err) }
    })
})


//create new user
userRoute.route("/new_user").post((req, res) => {
    var user = new Users()
    user = req.body
    user._id = mongoose.Types.ObjectId();
    Users.create(user).then(
        res.json(user.name + " has been created"))

})


module.exports = userRoute;