const { Order } = require("../models");
const checkPermissions = require("../utils/checkPermission");

const postOrder = async (req, res) => {
  const { userOrder, totalPrice, userId } = req.body;
  const newOrder = [];
  checkPermissions(userId, req.user.userId);
  userOrder.forEach((item) => {
    const { id, title, price, quantity } = item;
    newOrder.push({
      orderId: id,
      quantity,
      singlePrice: price,
      title,
    });
  });
  try {
    const order = await Order.create({
      orderProducts: newOrder,
      orderBy: req.user.userId,
      totalPrice,
    });
    res.status(200).json(order);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const getAllOrder = async (req, res) => {
  try {
    const userOrders = await Order.find(
      { orderBy: req.user.userId },
      { __v: 0, orderBy: 0, updatedAt: 0 }
    ).sort("-createdAt");
    res.status(200).json(userOrders);
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: error.message });
  }
};

const ordersStatus = async () => {
    let orders = await Order.aggregate([
      {$group:{_id:"$orderProducts",count:{$sum:1}}}
    ]);
  
    
    // orders = orders.reduce((acc,curr) => {
    //   const {_id:title,count} = curr;
      
    //   const status = title.forEach(item=>{
    //     // return item.status;
    //     acc[item.status] = acc[count] ;
    //   });
   
      
    //   return acc;
    // },{});
    const orderStatus = []
    orders.map(items => {
      const {_id:title,count} = items;
      title.forEach(item => {
        const haveOrNot = orderStatus.filter(order => order.status === item.status)
        orderStatus.push({status:item.status,count});
        console.log(haveOrNot);
      });
   
    });
        console.log(orderStatus);
    
    // orders = orders.map(order=>{
    //   const acc = []
    //   acc[order.status] = order
    //   console.log(order);
    // })
}

module.exports = { postOrder, getAllOrder,ordersStatus };
