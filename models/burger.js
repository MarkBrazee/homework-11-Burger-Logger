// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm:this.all("burgers", function(res) {
            cb(res);
        });
    },
}