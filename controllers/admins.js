exports.getProfile = (req, res, next) => {
  res.render("main/profile", {
    user: req.user,
  });
};
