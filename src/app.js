const express = require("express");
var session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const GitHubStrategy = require("passport-github").Strategy;
const multer = require("multer");
const path = require("path");
const keys = require("./config");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage: storage });

//Github
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.GITHUB.clientID,
      clientSecret: keys.GITHUB.clientSecret,
      callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

const app = express();

//Config
app.set("port", process.env.PORT || 80);

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/build"));
app.use(express.static(__dirname + "/uploads"));
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(
  "/api/profiles",
  upload.single("picture"),
  require("./routes/profiles")
);

app.get("/auth/github", passport.authenticate("github"));
app.get(
  "/auth/github/callback",
  passport.authenticate("github"),
  (req, res) => {
    res.redirect("/");
  }
);
app.get("/auth/profile", (req, res) => {
  if (req.user) {
    const { id, username, photos } = req.user;
    res.status(200).json({ id, username, photos });
  } else {
    res.status(500).json({ message: "no data" });
  }
});
app.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/../client/build/index.html");
});

module.exports = app;
