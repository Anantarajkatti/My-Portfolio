const express = require("express");

const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbconfig");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
