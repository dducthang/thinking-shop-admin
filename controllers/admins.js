const AccountService = require("../models/services/accountServices");
const bcrypt = require("bcrypt");
exports.getProfile = (req, res, next) => {
  res.render("main/profile", {
    user: req.user,
  });
  console.log(req.user);
};

exports.getUpdatePassword = async (req, res, next) => {
  res.status(200).render("auth/updatePassword", {
    profile: req.user,
    user: req.user,
  });
};

exports.postUpdatePassword = async (req, res, next) => {
  const isMatch = await bcrypt.compare(
    req.body.currentpassword,
    req.user.accountId.password
  );

  if (isMatch) {
    await AccountService.updatePassword(
      req.user.accountId._id,
      req.body.password
    );
    return res.render("auth/updatePassword", {
      success_msg: "Password changed",
      user: req.user,
    });
  }
  return res.render("auth/updatePassword", {
    errors: [{ msg: "Wrong current password" }],
    user: req.user,
  });
};
