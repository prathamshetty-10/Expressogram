import messageModel from '../models/messageModel.js'

export const addMessage = async (req, res, next) => {
    try{
        const {from,to,message}=req.body;
        const data=await messageModel.create({
            message:{text:message},
            users:[from,to],
            sender:from,
        });
        if(data)return res.json({msg:"message added"})
            else{
        return res.json({msg:"message not added"})}


    }
    catch(err){
        next(err);
    }
  };
export const getAllMessage = async (req, res, next) => {
    try{


    }
    catch(err){
        next(err);
    }
  };
