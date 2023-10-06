const express = require("express");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");

const carRouter = require("./routes/car");
const adminRouter = require("./routes/admin");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use((req, res, next) => {
  if (req.url === "/") res.redirect("/dashboard");
  else next();
  8;
});

// flash notif
app.use(
  session({
    secret: "geeksforgeeks",
    saveUnitialized: true,
    resave: true,
  })
);

app.use(flash());

// static file
app.use(express.static(`${__dirname}/public`));

// view engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.use("/api/v1/", carRouter);
app.use("/dashboard", adminRouter);

module.exports = app;
