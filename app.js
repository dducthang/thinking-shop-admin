const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const MongoDBStore = require("connect-mongodb-session")(session);

require("./db/mongoose");

//require('dotenv/config');

const homepageRoutes = require("./routes/homepage");
const authRoutes = require("./routes/auth");
const shopsRoutes = require("./routes/shops");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
// const productRoutes = require('./routes/product');
// const userRoutes = require('./routes/user');
// const authRoutes = require('./routes/auth');
// const orderRoutes = require('./routes/order');
// const apiRoutes = require('./routes/api');
const adminRoutes = require("./routes/admins");
const initializePassport = require("./config/passport");
initializePassport(passport);
const { checkAuthenticated, checkNotAuthenticated } = require("./config/auth");

const app = express();
const port = process.env.PORT || 4000;
const store = new MongoDBStore({
  uri: process.env.CONNECTION_STRING,
  collection: "sessions",
});

//middlewares
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("tiny"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: store,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routes
app.use("/", homepageRoutes);
app.use("/shops", checkAuthenticated, shopsRoutes);
app.use("/auth", authRoutes);
app.use("/users", checkAuthenticated, usersRoutes);
app.use("/products", checkAuthenticated, productsRoutes);
// app.use('/products', productRoutes);
// app.use('/users', userRoutes);
// app.use('/auth', authRoutes);
// app.use('/orders', orderRoutes);
// app.use('/api', apiRoutes);
app.use("/admins", checkAuthenticated, adminRoutes);

//server;
app.listen(port, () => {
  console.log("Server is running on http://localhost:4000");
});
