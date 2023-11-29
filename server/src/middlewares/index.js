const checkAuth = require("./auth");
const errorHandlerMiddleware = require("./errorHandler");
const notFoundMiddleware = require("./notFound");

module.exports = { errorHandlerMiddleware, notFoundMiddleware,checkAuth };
