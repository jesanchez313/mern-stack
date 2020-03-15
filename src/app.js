const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 8080);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api/profiles", require("./routes/profiles"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
