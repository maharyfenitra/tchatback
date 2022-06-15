const RoomsModel = require("../models/rooms.js")

const newRoom = async (req,res)=>{
    try{
        RoomsModel.create({name:req.body.name})
        res.status(200).json({status:200})
    }catch(error){
        res.status(500).json({message:error.message})
    }
    
}
const deleteRoom = async (req,res)=>{
    try{
        const room = await RoomsModel.findOne({_id:req.body._id})
        room.delete()
    }catch(error){

    }
    res.status(200).json({status:200})
}
const getRoom = async (req,res)=>{
    try{

    }catch(error){

    }
}
module.exports = {newRoom,deleteRoom}