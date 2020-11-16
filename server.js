/*Psudeo code

1. Create Github repo- Burger-Logger

2. Create package JSON file

3. Install express

4. Create server.js file
    - require express
    - provide PORT
    - variable for express
    - set handlebars
    - import routes
    - start server to listen to client request

5. Database setup
    - create db folder
        - create schema file
            - create burgers_db
            - switch to or use burgers_db
                -burgers table
                    - id as primary key
                    - burger_name as a string
                    - devoured: a boolean
        - create seeds file
            - burgers table
    - run the SQL files
        - command line tool mysql -u root -p
            - command line source schema.sql
            - command line source seeds.sql

6. Create Config folder
    - create connection.js file
        - setup code to connect Node to MYSQL
        - export the connection
    - orm.js file
        - create the methods to execute MySQL commands
            - selectall()
            - insertOne()
            - updateOne()
        - export the ORM object: module.exports

7. Create Model folder
    - create burger.js file
        - import orm.js
        - create the code that will call the ORM functions using burger specific input for the ORM.
        - export at the end of the burger.js file

8. Create Contollers folder
    - create burgers_controller.js file
        - import Express
        - import burger.js file
    - create router for the app and export router at the end of the file

9. Create Views folder
    - create index.handlebars file
        - create template that Handlebars can render onto
        - create a button that will submit the user input into the database
        - create 
    - create Layouts folder
        - create main.handlebars file
            - set up file to use Handlebars

10. Hosting on Heroku

11. Create ReadMe file
*/

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the publi directory in the application directory.
app.use(express.static("public"));

//Parse application body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

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

// Trying to fix Heroku