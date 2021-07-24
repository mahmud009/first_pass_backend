const userModel = require("../model/userModel");

exports.createNewUser = async (user) => {
  return await userModel.createNewUser(user);
};

exports.updateUser = async (user) => {
  return await userModel.updateUser(user);
};
