var mysql = require('mysql');
var connection;

// Sets the connection for is the user is using this app locally or 
// from Heroku.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

// Connects to the database.
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;
