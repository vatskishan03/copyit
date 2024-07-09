const Snippet = require('../models/snippet.model.js');
const generateToken = require('../utils/tokenGenerator.js');

async function createSnippet(data) {
  try {
    let token;
    let isUnique = false;

    while (!isUnique) {
      token = generateToken(5); 
      const existingSnippet = await Snippet.findOne({ token });
      isUnique = !existingSnippet;
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
