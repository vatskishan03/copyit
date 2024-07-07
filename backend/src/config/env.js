// backend/src/config/env.js
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const env = {
  DATABASE_URL: process.env.DATABASE_URL , 
  PORT: process.env.PORT ,
  NODE_ENV: process.env.NODE_ENV,
};
module.exports = env;