const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  answers: {
    type: [String],   // tableau de réponses
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Result", ResultSchema);
