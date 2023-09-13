const notFoundMiddleware = (req, res) => {
  return res.status(404).send("Route doesn't exist!");
};
export default notFoundMiddleware;
