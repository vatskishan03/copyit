// backend/src/utils/tokenGenerator.js

function generateToken(length = 5) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let token = '';
    
    while (token.length < length) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
  
      // Ensure the pattern (2 digits, 1 lowercase, 1 uppercase, 1 special character)
      if (token.length === 2 && !/\d/.test(token[1])) { // Second char must be a digit
        token = token.slice(0, 1); // If not, remove the last added char and try again
      } else if (token.length === 3 && !/[a-z]/.test(token[2])) { // Third char must be lowercase
        token = token.slice(0, 2);
      } else if (token.length === 4 && !/[A-Z]/.test(token[3])) { // Fourth char must be uppercase
        token = token.slice(0, 3);
      } else if (token.length === 5 && !/[!@#$%^&*()]/.test(token[4])) { // Fifth char must be special
        token = token.slice(0, 4);
      }
    }
    
    return token;
  }
  
  module.exports = generateToken;
  