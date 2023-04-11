const express = require("express");
const authController = require("../controllers/auth/authController");
const authRouter = express.Router();
const auth = require("../middleware/authMiddleware");

authRouter.route("/signup").post(authController.signup);
authRouter.route("/login").get(authController.login);

module.exports = authRouter;
