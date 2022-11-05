const jwt = require("jsonwebtoken");
const Kunci_Rahasia = "RahasiaBoss";

function generateToken(payload) {
  const token = jwt.sign(payload, Kunci_Rahasia);
  return token;
}

function verifyToken(token) {
  const decoded = jwt.verify(token, Kunci_Privat);
  return decoded;
}

module.exports = {
  generateToken,
  verifyToken,
};
