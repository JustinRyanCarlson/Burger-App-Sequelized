var connection = require("../config/connection.js");

// Object comprised of functions that query the database.
var burger = {
    read: function(cb) {
        // Selects all data from the burgers table and passes that data to the callback function.
        connection.query("SELECT * from burgers", function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    create: function(name) {
        // Creates a new burger in the database.
        connection.query("INSERT INTO `burgers` (`id`, `burger_name`, `devoured`, `data`) " +
            "VALUES (NULL, '" + name + "', FALSE, CURRENT_TIMESTAMP);",
            function(err, res) {
                if (err) throw err;
            });
    },
    update: function(burger_id) {
        // Updates the selected burger to devoured=true in the database.
        connection.query("UPDATE burgers SET devoured=1 WHERE id='" + burger_id + "';",
            function(err, res) {
                if (err) throw err;
            });
    }
};

module.exports = burger;
