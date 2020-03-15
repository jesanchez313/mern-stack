const express = require("express");
const cors = require("cors");

const app = express();

//Config
app.set("port", process.env.PORT || 8080);

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../client/build"));

//routes
app.use("/api/profiles", require("./routes/profiles"));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/../client/build/index.html");
});

module.exports = app;
