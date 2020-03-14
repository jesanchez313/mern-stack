const mongoose = require("mongoose");

// mongodb://heroku_5qxngcw3:as0fk6o9f74lc7kv54ksjqhmcs@ds155674.mlab.com:55674/heroku_5qxngcw3
// mongodb://db:27017/mernstack
const URI =
  "mongodb://heroku_5qxngcw3:as0fk6o9f74lc7kv54ksjqhmcs@ds155674.mlab.com:55674/heroku_5qxngcw3";

const connect = mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
