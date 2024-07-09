// backend/src/models/usedToken.model.js
const mongoose = require('mongoose');
const usedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UsedToken = mongoose.model('UsedToken', usedTokenSchema);
module.exports = UsedToken;
