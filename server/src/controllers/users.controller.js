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

    let statusTime = [];
    const users = await User.find();
    users.map(user => {
      statusTime.push({name:user.name,createdAt:user.createdAt,action:"created"})
    })
    

    
    res.status(200).json({status,statusTime});
  } catch (error) {
    console.log(error);
    res.status(500).json({error:error.messsage})
  }
}

const findAllUser = async (req,res) =>  {
  try {
    const allUsers = await User.find().sort('name');
  res.status(200).json(allUsers)
  } catch (error) {
    res.status(400).json({err:error.message})
  }
} ;

const findSingleUser = async (req,res) => {
  const {check,data} = req.body.data;
  let response;
  try {
    if(check === 'name'){
       response = await User.findOne({name:data});
     }else if(check === 'email'){
       response = await User.findOne({email:data});
     }
     res.status(200).json(response);
  } catch (error) {
    res.status(400).json({err:error.message})
  }
};

const deleteSingleUser = async (req,res) => {
 try {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.status(200).json({msg:'successful delete.'});
 } catch (error) {
  res.status(500).json({err:error.message});
 }
}


module.exports = {updateUserController,usersStatus,findAllUser,findSingleUser,deleteSingleUser};
