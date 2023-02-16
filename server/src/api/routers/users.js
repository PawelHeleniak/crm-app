const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersController")
router.get("/", usersControllers.register)

module.exports = router;