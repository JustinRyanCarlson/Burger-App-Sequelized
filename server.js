var express = require('express');
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Looks at available engines and sets the view engine to Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middleware to parse the body of the request from the client side and middleware to
// set the path to static files.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public/assets'));

// Requires the routes from the burgers_controller.js file and sets the middleware
// to use these routes.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('Listening on port: ' + PORT);
    });
});
