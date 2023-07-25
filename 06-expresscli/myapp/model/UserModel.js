const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserType = {
  username: String,
  password: String,
  age: Number,
};
const UserModel = mongoose.model("register", new mongoose.Schema(UserType));
//模型user,将会对应users集合，
module.exports = UserModel;
