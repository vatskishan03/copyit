// backend/src/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db.js');
const snippetRoutes = require('./routes/snippet.js');
const keepWarmRouter = require('./keepwarm.js');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded bodies

// Routes
app.use('/api/snippet', snippetRoutes);
app.use('/api', keepWarmRouter); 

// Simple error handling middleware (improve as needed)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, async () => { // Use app.listen directly 
  await connectDB(); 
  console.log(`Server running on port ${port}`);
});
