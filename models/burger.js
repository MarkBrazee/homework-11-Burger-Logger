// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(cols, vals, cb) {
        orm.update("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;