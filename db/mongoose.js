require("dotenv/config");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Database connected"))
  .catch((e) => {
    console.log(e);
  });
