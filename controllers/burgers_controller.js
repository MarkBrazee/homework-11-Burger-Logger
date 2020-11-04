var express = require("express");

var router = express.Router();

// Import the model, burger.js, to use its database functions
var burger = require("../models/burger.js");

// Create all routes and set up logic within those routes where required
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        // send back the id
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var state = "id = " + req.params.id;

    console.log("state", state);

    burger.update({
        devoured: req.body.devoured
    }, state, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;