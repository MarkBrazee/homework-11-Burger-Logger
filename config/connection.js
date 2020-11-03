// Set up MySQL connection
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection( {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "f8t3fg02ojweqnfn",
        database: "qivml1lmnynx19xz"
    });

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
}

// Export connection for our ORM use
module.exports = connection;