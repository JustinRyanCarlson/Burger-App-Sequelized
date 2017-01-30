var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

// GET route at the root that calls the burgers.read function in burgers.js and passes in
// a callback. The callback will be ran in burgers.js and is used to render the .handlebars
// files with the burger data from the database.
router.get("/", function(req, res) {
    burgers.read(function(data) {
        res.render('index.handlebars', { burgers: data });
    });
});

// Post route at the root that calls the burgers.create function in burgers.js and passes in
// the data the user entered. Once that function is ran, the server sends a response of 'success'.
router.post("/", function(req, res) {
    burgers.create(req.body.burger_name);
    res.send('success');
});

// Put route that has a place holder for the burger id that is going to be updated. Calls the
// burgers.update function in burgers.js and passes in the id to be updated.
router.put("/:id", function(req, res) {
    burgers.update(req.params.id);
});



// Export routes for server.js to use.
module.exports = router;
