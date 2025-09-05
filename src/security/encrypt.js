const crypto = require('crypto');

function encrypt(text, key) {
  const cipher = crypto.createCipher('aes-256-gcm', key);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes-256-gcm', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}