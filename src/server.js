require("dotenv").config();

const app = require("./app");
require("./database");

const port = app.get("port");

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/../client/build/index.html");
});

const main = async () => {
  await app.listen(port);
  console.log("runing port " + port);
};

main();
