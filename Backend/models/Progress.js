const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: String, required: true },
  progress: { type: Number, required: true },  // Store progress as percentage
});

module.exports = mongoose.model('Progress', ProgressSchema);
