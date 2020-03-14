const app = require("./app");
require("./database");

async function main() {
  await app.listen(4000);
  console.log("runing port 4000");
}

main();
