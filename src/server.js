require("dotenv").config();

const app = require("./app");
require("./database");

const port = app.get("port");

const main = async () => {
  await app.listen(port);
  console.log("runing port " + port);
};

main();
