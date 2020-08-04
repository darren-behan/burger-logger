// Set up MySQL connection.
const mysql = require("mysql");
require("dotenv").config();

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,

  // Set the port of our application
  // process.env.PORT lets the port be set by Heroku
  port: process.env.DB_PORT,

  // Your username
  user: process.env.DB_USERNAME,

  // Your password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
