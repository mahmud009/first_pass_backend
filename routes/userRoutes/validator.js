const joi = require("joi");

const newUserSchema = joi.object({
  fullName: joi.string().required(),
  phoneNumber: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

const updateUserSchema = joi.object({
  id: joi.number().required(),
  fullName: joi.string().required(),
  phoneNumber: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = {
  newUserSchema,
  updateUserSchema,
};
