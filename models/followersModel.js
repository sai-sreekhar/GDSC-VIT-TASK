const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    followerUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "Followers" }
);

module.exports = mongoose.model("Followers", followerSchema);
