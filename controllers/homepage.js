exports.getIndex = async (req, res, next) => {
  const user = req.user;
  console.log(user);

  res.render("main/index", {
    user,
  });
};
