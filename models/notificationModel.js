const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    notificationMessage: {
      type: String,
    },
    type: {
        type: Number,
    },
    timeStamp: {
        type: Date,
    },
    triggeredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    receivedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    }
  },
  { collection: "Notifications" }
);

module.exports = mongoose.model("Notifications", notificationSchema);
