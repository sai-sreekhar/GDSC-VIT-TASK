const express = require("express");
const likeController = require("../controllers/like/likeController");
const likeRouter = express.Router();
const auth = require("../middleware/authMiddleware");

likeRouter.route("/").post(auth, likeController.postLike);
likeRouter.route("/:likeId").delete(auth, likeController.deleteLike);

module.exports = likeRouter;
