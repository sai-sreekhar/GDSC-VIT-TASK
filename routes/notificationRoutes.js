const express = require("express");
const notificationController = require("../controllers/notification/notificationController");
const notificationRouter = express.Router();
const auth = require("../middleware/authMiddleware");

notificationRouter
  .route("/")
  .post(auth, notificationController.createNotification);
notificationRouter
  .route("/:notificationId")
  .get(auth, notificationController.getNotification);
notificationRouter
  .route("/:notificationId")
  .put(auth, notificationController.updateNotification);
notificationRouter
  .route("/:notificationId")
  .delete(auth, notificationController.deleteNotification);

module.exports = notificationRouter;
