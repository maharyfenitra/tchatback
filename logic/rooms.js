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
        res.status(200).json({status:200})
    }catch(error){
        res.status(500).json({message:error.message})
    }
    res.status(200).json({status:200})
}
const getRooms = async (req,res)=>{
    try{
        const room = await RoomsModel.find();
        res.status(200).json({room})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports = {newRoom,deleteRoom,getRooms}