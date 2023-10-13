const { Order } = require("../models");

const postOrder = async (req, res) => {
  const { userOrder, totalPrice } = req.body;
  const newOrder = [];
  userOrder.forEach((item) => {
    const { id, title, price, quantity } = item;
    newOrder.push({
      orderId: id,
      quantity,
      singlePrice: price,
      title,
    });
  });
  console.log(newOrder);
  const order = await Order.create({
    orderProducts: newOrder,
    orderBy: req.user.userId,
    totalPrice,
  });
  res.status(200).json(order);
};

module.exports = postOrder;
