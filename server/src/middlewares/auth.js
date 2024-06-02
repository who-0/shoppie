const jwt = require("jsonwebtoken");
const { UnAuthenticatedError } = require("../errors");
const secret = process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
  const { token } = req.cooxkies;

  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (error) {}
};

module.exports = checkAuth;
