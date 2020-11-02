var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the publi directory in the application directory.
app.use(express.static("public"));

//Parse application body
app.use(express.urlencoded({ extended: true}));
app.use(express.join());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server acces to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server so that it can begin to listen to client requests
app.listen(PORT, function() {
    //Log (server-side when the server has started
    console.log("Server listening on http://localhost:"+ PORT);
    
});