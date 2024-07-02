// backend/src/models/snippet.model.js

const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  canEdit: {
    type: Boolean,
    default: false, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: false, 
  },
});

const Snippet = mongoose.model('Snippet', snippetSchema);
module.exports = Snippet;
