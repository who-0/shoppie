const { Order } = require("../models");
const checkPermissions = require("../utils/checkPermission");
const moment = require('moment');
const {  findAllUser } = require("./users.controller");
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

const ordersStatus = async (req,res) => {
  // checkPermissions(userId, req.user.userId);
   try {
    let orders = await Order.aggregate([
      {
        $unwind: "$orderProducts",
      },
      {$group:{_id:"$orderProducts.status",count:{$sum:1}}}
    ]);

    orders = orders.reduce((acc,curr) => {
      const {_id:title,count} = curr;
      acc[title] = count;
      return acc;
    },{});

    let orderTime = await Order.aggregate([
      {
        $group:{
          _id:{
            day:{$dayOfMonth:"$createdAt"},
            month: { $month: "$createdAt" },
          },
          count:{$sum:1} 
        }
      },
      {$sort:{"_id.day":-1,"_id.month":-1}}
    ])

    orderTime = orderTime.map(item=>{
      const {_id:{day,month},count} = item;
   
      const date = moment({day,month:month-1}).format('MMM DD');
      return {date,count};
    }).reverse();

    // let orderCreatedTime = await Order.aggregate([
    //   {
    //     $group:{
    //       _id:{
    //         time:"$createdAt",
    //         orderId:"$_id",
    //         orderBy:"$orderBy"
    //       }
    //     },
     
    //   }
    // ])
    const createTime = []
    const orderCreatedTime = await Order.find({});
    const allUsers = await findAllUser();

    orderCreatedTime.map(order => {
      allUsers.map(user => {
        
        if(user.id === order.orderBy.toString()){
          createTime.push({name:user.name,createdAt:order.createdAt})
        }
      })
    })


    res.status(200).json({orders,orderTime,createTime});
   } catch (error) {
    res.status(500).json({error:error.message})
   }
}



module.exports = { postOrder, getAllOrder,ordersStatus };
