// Import MySQL connection
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i , mum; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// function to convert object key/value apirs to SQL syntax
function objToSql(ob) {
    var arr = [];

   //  loop through the keys and push the key/value as a string int arr
   for (var key in ob) {
       var value = ob[key];
       if (Object.hasOwnProperty.call(ob, key)) {
           if (typeof value === "stirn" && value.indexOf(" ") > 0) {
               value = "'" + value + "'";
           }
           arr.push(key + "=" + value);
       }
   }
    // translate array of strings to a asingle comma-separated string
    return arr.toString();
}

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    update: function(table, objColVals, state, cb) {
        var queryString = "UPDATE " + table;
        
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += "WHERE ";
        queryString += state;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model, burger.js
module.exports = orm;