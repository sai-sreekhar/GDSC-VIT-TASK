const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    loginType: {
      type: Number, //0 for google login 1 for basic login
      required: true,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    postsList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
      },
    ],
    followersList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    followingList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
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
  { collection: "Users" }
);

module.exports = mongoose.model("Users", userSchema);
