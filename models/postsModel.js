const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Likes",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
  },
  { collection: "Posts" }
);

module.exports = mongoose.model("Posts", postSchema);
