const Account = require("../account");
const User = require("../user");
const bcrypt = require("bcrypt"); //để băm pass

exports.getUserLean = async (filter) => {
  return await Account.findOne(filter).lean();
};

exports.signup = async (newUser) => {
  const { name, phone, email } = newUser;
  //Them Account
  const saltRounds = 10; //tham số để truyền vào hàm hash, 10 rất thông dụng
  const hashedPassword = await bcrypt.hash(newUser.password, saltRounds); //hash password được gửi đến server từ form
  const newAccount = new Account({
    email,
    password: hashedPassword,
    actor: "user",
  });
  const result = await Account.create(newAccount);
  //Lưu lại id của account
  const accountId = result._id;
  //them User
  const user = new User({
    phone,
    name,
    address: "HCM",
    accountId,
  });
  return User.create(user); //luu vao db
};
