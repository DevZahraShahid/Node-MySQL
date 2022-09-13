const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");

app.use(bodyParser.json());

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
