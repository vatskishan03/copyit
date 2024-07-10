// keepWarm.js
const express = require('express');

const router = express.Router(); 

router.get('/keepWarm', (req, res) => {
  console.log('Render keep-alive ping received!');
  res.status(200).send('Application is warm!'); 
});

export default router; 