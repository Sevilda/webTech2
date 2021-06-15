const express = require('express');
const mongoose = require('mongoose');
const {isValidObjectId} = require('mongoose');
const sweetRoute = express.Router();
const Sweet = require('../model/Sweet');

//get all the sweets
sweetRoute.route("/sweets").get((req, res) => {
    Sweet.find().then(data => {
        try { res.json(data) }
        catch (err) { console.log(err) }
    })
})


//create new sweet
sweetRoute.route("/new_sweet").post((req, res) => {
    var sweet = new Sweet()
    sweet = req.body
    sweet._id = mongoose.Types.ObjectId();
    Sweet.create(sweet).then(
        res.json(sweet.name + " has been created"))

})

//get a sweet by ID
sweetRoute.route("/sweets/:id").get((req, res) => {
    if (isValidObjectId(req.params.id)) {
        Sweet.findById(req.params.id).then(data => {
            try {
                if (!data) {
                    res.json("No object found");
                } else
                    res.json(data)
            }
            catch (err) { console.log(err) }
        })
    }
    else (res.json("Object does not exist"))
})


//update a sweet
sweetRoute.route("/sweets/:id").put((req, res) => {

    if (isValidObjectId(req.params.id)) {
        Sweet.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => {
            try {
                if (!data) {
                    res.json("No object found");
                } else {
                    res.json("Success");
                }
            }
            catch (err) { console.log(err) }
        })
    }
    else (res.json("Object does not exist"))
}
)


//delete a sweet
sweetRoute.route("/sweets/:id").delete((req, res) => {
    if (isValidObjectId(req.params.id)) {
        Sweet.findByIdAndDelete(req.params.id).then(data => {
            res.json("Success");
        })
    }
    else (res.json("Object does not exist"))
})

module.exports = sweetRoute;
