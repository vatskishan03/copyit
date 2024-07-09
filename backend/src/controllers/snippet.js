// backend/src/controllers/snippet.js
const snippetService = require('../services/snippet.js');

async function createSnippet(req, res) { 
  try {
      const { content } = req.body;

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

async function getSnippet(req, res) {
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
