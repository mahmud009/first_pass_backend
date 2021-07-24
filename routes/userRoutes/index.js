var express = require("express");
var router = express.Router();
const userService = require("../../services/userService");
const { newUserSchema, updateUserSchema } = require("./validator");

// Create user
router.post("/new", async (req, res) => {
  const { error } = newUserSchema.validate(req.body);
  const errorMessage = error ? error.details[0].message : "";
  if (error) return res.status(400).send({ message: errorMessage });

  try {
    const message = await userService.createNewUser(req.body);
    res.status(200).send({ message });
  } catch (error) {
    const sqlError = error.sqlMessage;
    return res.status(500).send({ message: sqlError || error.message });
  }
});

router.post("/update", async (req, res) => {
  const { error } = updateUserSchema.validate(req.body);
  const errorMessage = error ? error.details[0].message : "";
  if (error) return res.status(400).send({ message: errorMessage });

  try {
    const message = await userService.updateUser(req.body);
    res.send({ message }).status(200);
  } catch (error) {
    const sqlError = error.sqlMessage;
    return res.status(500).send({ message: sqlError || error.message });
  }
});

module.exports = router;
