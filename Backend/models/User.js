const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },  // Add role field
  progress: [
    {
      course: { type: String, required: true },
      progress: { type: Number, required: true }  // Store progress as percentage
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id, email: this.email, role: this.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;

