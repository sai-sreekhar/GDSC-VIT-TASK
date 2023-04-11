const express = require("express");
const userController = require("../controllers/user/userController");
const userRouter = express.Router();
const auth = require("../middleware/authMiddleware");

userRouter.route("/").post(auth, userController.getAllUsers);
userRouter.route("/:userId").get(auth, userController.getUser);
userRouter.route("/:userId").put(auth, userController.updateUser);

module.exports = userRouter;
