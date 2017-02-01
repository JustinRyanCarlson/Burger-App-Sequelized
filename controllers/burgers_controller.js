var express = require("express");
var router = express.Router();
var db = require("../models");

// GET route at the root that calls the findAll Sequelize function to get all
// the data back from the database. This data is then used in the rendering of
// the page using Handlebars.
router.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
        res.render('index.handlebars', { burgers: data });
    });
});

// Post route at the root that calls the create Sequelize function and creates a new burger record
// from the name the user entered. Once the promise is returned from this function, the success
// message is sent back as a response.
router.post("/", function(req, res) {
    db.burgers.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.send('success');
    });
});

// Put route that has a place holder for the burger id that is going to be updated. Calls the
// update Sequelize function and updates the devoured column for the selected record to 1 (true).
router.put("/:id", function(req, res) {
    db.burgers.update({ devoured: 1 }, {
        where: {
            id: req.params.id
        }
    });
});



// Export routes for server.js to use.
module.exports = router;
