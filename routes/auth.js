const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");
const { checkAuthenticated, checkNotAuthenticated } = require("../config/auth");

router.get("/login", checkNotAuthenticated, authController.getLogin);
router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })
);
router.get("/logout", checkAuthenticated, (req, res, next) => {
  req.logOut();
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.redirect("/auth/login");
  });
});
router.get("/signup", authController.getSignup);
router.get("/forgotPassword", authController.getForgotPassword);
router.get("/block/user/:_id", authController.blockUser);
router.get("/unblock/user/:_id", authController.unblockUser);
router.get("/block/shop/:_id", authController.blockShop);
router.get("/unblock/shop/:_id", authController.unblockShop);

module.exports = router;
