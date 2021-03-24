const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", postSchema);
