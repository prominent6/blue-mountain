const express = require("express");

const mongoose = require("mongoose");
const db = require("./config/key.js").mongoURL;
const bodyParser = require("body-parser");

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
app.get("/", (req, res) => {
  res.render("index");
});

//连接mongodb
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err));
