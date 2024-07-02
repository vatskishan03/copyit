// backend/src/controllers/snippet.js
const snippetService = require('../services/snippet.js');
const UsedToken = require('../models/usedToken.model.js');
const generateToken = require('../utils/tokenGenerator');

async function createSnippet(req, res, io) {
  try {
    const { content } = req.body;

    let token;
    let isUnique = false;

    while (!isUnique) { // Keep generating tokens until a unique one is found
      token = generateToken(5);
      const existingToken = await UsedToken.findOne({ token });
      const existingSnippet = await snippetService.getSnippet(token);
      isUnique = !existingToken && !existingSnippet; // Unique if no snippet with the token exists

      if (isUnique) {
        await UsedToken.create({ token }); // Save the token to used_tokens collection
      }
    }

    const snippet = await snippetService.createSnippet({ content, canEdit: false });

    res.status(201).json({
      message: 'Snippet created successfully',
      snippet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the snippet' });
  }
}

async function getSnippet(req, res, io) {
  try {
    const { token } = req.params;

    const snippet = await snippetService.getSnippet(token);
    if (!snippet) {
      return res.status(404).json({ error: 'Snippet not found' });
    }

    res.status(200).json({
      snippet
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the snippet' });
  }
}


module.exports = { createSnippet, getSnippet };
