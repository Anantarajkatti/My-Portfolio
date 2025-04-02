const express = require("express");
var cors = require('cors')

const app = express();
require("dotenv").config();
app.use(cors())
const dbconfig = require("./config/dbconfig");  // it will automatically executes its property of node JS

const portfolioRoute= require('./routes/portfolioRoute')

app.use(express.json())

app.use('/api/portfolio',portfolioRoute)

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
 