// backend/src/utils/tokenGenerator.js
function generateToken(length = 5) {
  const charSets = {
    digits: '0123456789',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    special: '!@$&*()',
  };
  const pattern = [
    charSets.digits, charSets.digits, 
    charSets.lowercase, charSets.uppercase, 
    charSets.special
  ];

  let token = '';
  for (const charSet of pattern) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    token += charSet.charAt(randomIndex);
  }
  while (token.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}
module.exports = generateToken;
  