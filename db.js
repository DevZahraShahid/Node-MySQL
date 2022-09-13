const mysql = require("mysql");
require("dotenv").config();

var mysqlConnection = mysql.createConnection({
  host: process.env.MSQL_HOST,
  user: process.env.MSQL_USER,
  password: process.env.MSQL_PASSWORD,
  database: process.env.MSQL_DATABASE,
  port: process.env.MSQL_PORT,
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected to db...");
  } else {
    console.error("Connection to db failed! Error:" + err.message);
  }
});
