const Admin = require("../admin");
exports.getUser = async (filter) => {
  return await Admin.findOne(filter).populate("accountId");
};
