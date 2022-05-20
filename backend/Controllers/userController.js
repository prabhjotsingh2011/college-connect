  const userModel=require('../models/userModel.js');

  class userController{
    
    async addUser(req,res){
        const {uid,image,email,name,phoneNumber}=req.body;
        const existsUser=await userModel.findOne({uid:uid});
        // console.log(existsUser);
        if(existsUser){
            return res.status(200).json({message:"User already exists"});
        }
        const user = await userModel.create({uid,image,email,name,phoneNumber});
        return res.status(200).json(user);
    }
  }

  module.exports = new userController();