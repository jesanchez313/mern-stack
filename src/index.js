const app = require("./app");
require("./database");

async function main() {
  await app.listen(80);
  console.log("runing port 80");
}

main();
