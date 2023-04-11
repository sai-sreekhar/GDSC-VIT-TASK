const express = require("express");
const postController = require("../controllers/post/postController");
const postRouter = express.Router();
const auth = require("../middleware/authMiddleware");

postRouter.route("/").get(auth, postController.getAllPosts);
postRouter.route("/:postId").get(auth, postController.getPost);
postRouter.route("/").post(auth, postController.sendPost);
postRouter.route("/:postId").put(auth, postController.updatePost);
postRouter.route("/:postId").delete(auth, postController.deletePost);

module.exports = postRouter;
