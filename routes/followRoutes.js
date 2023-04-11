const express = require("express");
const followController = require("../controllers/follow/followController");
const followRouter = express.Router();
const auth = require("../middleware/authMiddleware");

followRouter.route("/").post(auth, followController.followUser);
followRouter.route("/").delete(auth, followController.unfollowUser);

module.exports = followRouter;
