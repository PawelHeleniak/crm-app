const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersController")
router.put("/", usersControllers.register)
router.get("/", usersControllers.login)

module.exports = router;