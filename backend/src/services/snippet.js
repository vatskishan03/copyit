// backend/src/services/snippet.js
const Snippet = require('../models/snippet.model.js');
const generateToken = require('../utils/tokenGenerator.js');
const UsedToken = require('../models/usedToken.model.js');

async function createSnippet(data) {
  try {
    let token;
    let isUnique = false;

    while (!isUnique) { 
      token = generateToken(5); 
      const existingToken = await UsedToken.findOne({ token });
      const existingSnippet = await Snippet.findOne({ token });
      isUnique = !existingToken && !existingSnippet; 

      if (isUnique) {
        await UsedToken.create({ token }); 
      }
    } 

    const snippet = new Snippet({
      ...data,
      token,
      // expiresAt: ... 
    });

    return await snippet.save();
  } catch (error) {
    throw error; 
  }
}

// Get a snippet by its token
async function getSnippet(token) {
  try {
    return await Snippet.findOne({ token });
  } catch (error) {
    throw error; 
  }
}

module.exports = {
  createSnippet,
  getSnippet,
};
