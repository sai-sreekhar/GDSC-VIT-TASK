const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    followingUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    comment: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "Followers" }
);

module.exports = mongoose.model("Followers", followerSchema);
