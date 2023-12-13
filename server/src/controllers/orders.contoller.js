const { Order,User } = require("../models");
const checkPermissions = require("../utils/checkPermission");
const moment = require('moment');
const { findUserById } = require("./users.controller");

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

   
    const createTime = []
    const orderCreatedTime = await Order.find({}).sort("-createdAt");
    const allUsers = (await User.find());

    orderCreatedTime.map(order => {
      allUsers.map(user => {
        if(user.id === order.orderBy.toString()){
          createTime.push({name:user.name,createdAt:order.createdAt,action:"ordered"})
        }
      })
    })

    res.status(200).json({orders,orderTime,createTime});
   } catch (error) {
    res.status(500).json({error:error.message})
   }
}

const getAllOrderByAdmin = async (req,res) => {
  const orderBy = [];
  try {
 
    const users = await User.find();
     const orders = await Order.find();
    console.log(orders.length);
     orders.forEach(order => {
      users.forEach(user => {
  
        if(order.orderBy.toString() === user._id.toString()) {
          orderBy.push(
            {
              customerId:user._id,
              name:user.name,
              email:user.email,
              phone:user.phone,
              orderId:order._id,
              products:order.orderProducts,
              totalPrice:order.totalPrice,
            }
          )
        }
      })
     })



    res.status(200).json(orderBy);
  } catch (error) {
    console.log(error);
    res.status(500).json({err:error.message});
  }
}

const postOrderByAdmin = async (req,res) => {
    const {comment,changeStatus,orderId:_id} = req.body;
    console.log(comment,changeStatus);
    const data = await Order.findById({orderProducts:_id})
    res.status(200).json(data);
}



module.exports = { postOrder, getAllOrder,ordersStatus,getAllOrderByAdmin,postOrderByAdmin };
