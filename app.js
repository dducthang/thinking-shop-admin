const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("./db/mongoose");

//require('dotenv/config');

const homepageRoutes = require("./routes/homepage");
const authRoutes = require("./routes/auth");
const shopsRoutes = require("./routes/shops");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const reportRoutes = require("./routes/report");
// const productRoutes = require('./routes/product');
// const userRoutes = require('./routes/user');
// const authRoutes = require('./routes/auth');
// const orderRoutes = require('./routes/order');
// const apiRoutes = require('./routes/api');
// const adminRoutes = require('./routes/admin');

const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("tiny"));

//routes
app.use("/", homepageRoutes);
app.use("/shops", shopsRoutes);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/reports", reportRoutes);
// app.use('/products', productRoutes);
// app.use('/users', userRoutes);
// app.use('/auth', authRoutes);
// app.use('/orders', orderRoutes);
// app.use('/api', apiRoutes);
// app.use('/admins', adminRoutes);

//server;
app.listen(port, () => {
  console.log("Server is running on http://localhost:4000");
});
