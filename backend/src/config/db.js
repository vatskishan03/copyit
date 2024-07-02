// backend/src/config/db.js
const mongoose = require('mongoose');
const env = require('./env.js');

async function connectDB() {
  try {
    await mongoose.connect(env.DATABASE_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit with failure if connection fails
  }
}

module.exports = connectDB;
