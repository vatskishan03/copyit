// backend/src/config/env.js
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const env = {
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/your_database_name', // Provide a default value
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;
