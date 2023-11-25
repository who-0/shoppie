const { User } = require("../models");
const checkPermissions = require("../utils/checkPermission");
const moment = require('moment')

const updateUserController = async (req, res) => {
  const { name, email, password, _id, phone } = req.body;
  const { userId } = req.user;
  console.log(_id, userId);
  //?Check user id equal or not from req.body and token
  checkPermissions(_id, userId);
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id },
      { email, name, password, phone },
      { new: true, runValidators: true }
    )
      .select("+role")
      .select("-__v");
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).josn({ msg: error.message });
  }
};

const usersStatus = async (req,res) => {
  // const { userId } = req.user;
  // checkPermissions(_id, userId);
  try {
    let status = await User.aggregate([
      {$match:{role:'normal'}},
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
    
    status = status.map(item=>{
      const {_id:{day,month},count} = item;
   
      const date = moment({day,month:month-1}).format('MMM DD');
      return {date,count};
    }).reverse();

    let statusTime = await User.aggregate([
      {$group:{
        _id:{
          time:"$createdAt",
          name:"$name"
        }
      }}
    ])


    

    
    res.status(200).json({status,statusTime});
  } catch (error) {
    console.log(error);
    res.status(500).json({error:error.messsage})
  }
}

const findAllUser = async () =>  await User.find();;


module.exports = {updateUserController,usersStatus,findAllUser};
