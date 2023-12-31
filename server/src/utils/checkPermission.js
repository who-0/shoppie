const { UnAuthenticatedError } = require("../errors");
const checkPermissions = (requestUser, rescourceId) => {
  if (requestUser === rescourceId) return;
  throw new UnAuthenticatedError("Not authorized to access this route.");
};

module.exports = checkPermissions;
