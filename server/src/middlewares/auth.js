const jwt = require("jsonwebtoken");
const { UnAuthenticatedError } = require("../errors");
const secret = process.env.SECRET_KEY;
console.log('secret form auth.js', secret)

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  console.log('token form auth.js', token)
  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  try {
    const payload = jwt.verify(token, secret);
console.log('payload form auth.js', payload)

    req.user = payload;
    next();
  } catch (error) {}
};

module.exports = checkAuth;
