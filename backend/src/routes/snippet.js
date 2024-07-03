// backend/src/routes/snippet.js

const express = require('express');
const snippetController = require('../controllers/snippet.js'); 

const router = express.Router();
const wrap = (fn) => (...args) => fn(...args).catch(args[2]); // Error handling middleware

// POST /api/snippet/create - Create a new snippet
router.post('/create', wrap(snippetController.createSnippet));

// GET /api/snippet/:token - Get a snippet by its token
router.get('/:token', wrap(snippetController.getSnippet));

module.exports = router; 
    