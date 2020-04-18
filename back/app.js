require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);


//Connecting to the Database
mongoose
  .connect(process.env.DBURL_PRODUCTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Cross Domain CORS whitelist
const whitelist = ["http://localhost:1234", "http://localhost:3000"]; //Acepte las cookies de localhost:1234. Al estar en 2 dominios distintos.
const corsOptions = {                        //Por defecto el navegador al refrescar la pg no te lo reconoce
  origin: function (origin, callback) {
    callback(null, true);
    /*if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }*/
  },
  credentials: true
};

// Middleware Setup
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
require("./passport")(app);

app.use(express.static(path.join(__dirname, "public")));
const index = require("./routes/index");
app.use("/", index);
const auth = require("./routes/auth");
app.use("/auth", auth);

//Video Heroku
app.use("/", express.static(path.join(__dirname, "../front/dist")))



module.exports = app;
