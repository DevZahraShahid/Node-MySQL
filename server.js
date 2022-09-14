const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const itemsRouter = require("./routes/items");

app.use(bodyParser.json());
app.use("/items", itemsRouter);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
