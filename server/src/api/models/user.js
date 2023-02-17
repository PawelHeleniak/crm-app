const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  lastName: String,
  password: String,
  email: String,
});

module.exports = User;