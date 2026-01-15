const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  username: String,
  answers: [Number],
  score: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", resultSchema);