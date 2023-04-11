const express = require("express");
const commentController = require("../controllers/like/likeController");
const commentRouter = express.Router();
const auth = require("../middleware/authMiddleware");

commentRouter.route("/").post(auth, commentController.postComment);
commentRouter.route("/:commentId").put(auth, commentController.updateComment);
commentRouter
  .route("/:commentId")
  .delete(auth, commentController.deleteComment);

module.exports = commentRouter;
