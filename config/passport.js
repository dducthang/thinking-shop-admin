const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const authServices = require("../models/services/authServices");
const adminServices = require("../models/services/adminServices");

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await authServices.getUserLean({ email });
    if (!user) {
      return done(null, false, { message: "Account not exists1" });
    }
    if (!(user.actor === "admin"))
      return done(null, false, { message: "Account not exists2" });
    try {
      if (await bcrypt.compare(password, user.password)) {
        const hashPassword = await bcrypt.hash(password, 10);
        done(null, user);
      } else return done(null, false, { message: "Account not exists3" });
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser(async (_id, done) => {
    const user = await adminServices.getUser({ accountId: _id });
    done(null, user);
  });
}

module.exports = initialize;
//
//
