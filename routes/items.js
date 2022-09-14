const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

// READ ALL
Router.get("/", (req, res) => {
  let sqlQuery = "SELECT * FROM items ORDER BY quantity desc";
  mysqlConnection.query(sqlQuery, (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.error(err.message);
    }
  });
});

// READ ONE
Router.get("/:id", (req, res) => {
  let sqlQuery = "SELECT * FROM items WHERE id =" + req.params.id;
  mysqlConnection.query(sqlQuery, (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.error(err.message);
    }
  });
});

// CREATE
Router.post("/", (req, res) => {
  const Item = {
    id: req.body.id,
    item: req.body.item,
    quantity: req.body.quantity,
  };
  let sqlQuery = "INSERT INTO items SET ?";
  mysqlConnection.query(sqlQuery, Item, (err, row) => {
    if (!err) {
      res.send(Item);
    } else {
      console.error(err.message);
    }
  });
});

// UPDATE
Router.put("/:id", (req, res) => {
  let sqlQuery =
    "UPDATE items SET item='" +
    req.body.item +
    "', quantity='" +
    req.body.quantity +
    "' WHERE id=" +
    req.params.id;
  mysqlConnection.query(sqlQuery, (err, row) => {
    if (!err) {
      res.send("Item updated succesfully!");
    } else {
      console.error(err.message);
    }
  });
});

// DELETE
Router.delete("/:id", (req, res) => {
  let sqlQuery = "DELETE FROM items WHERE id = " + req.params.id;
  mysqlConnection.query(sqlQuery, (err, row) => {
    if (!err) {
      res.send("Deleted Succesfully!");
    } else {
      console.error(err.message);
    }
  });
});

module.exports = Router;
