// CORE MODULE

// THIRD PARTY PACKAGE
const dotenv = require("dotenv");
const app = require(`./app`);
const mongoose = require("mongoose");

// configuration
dotenv.config();
const port = process.env.PORT || 3000;
const database = process.env.DATABASE_URI;

// database connect
mongoose
  .connect(database, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) =>
    console.log({
      status: "error",
      message: err.message,
    })
  );

// listen port
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
