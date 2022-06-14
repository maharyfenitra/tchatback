const MessagesModel = require("../models/messages.js")

const newMessage = async (req, res) => {
    try {
        const message = await MessagesModel.create({ sender_id: req.body.sender_id, recipient_id: req.body.recipient_id, content: req.body.content })
        res.json({ status: 200, message })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getMessages = async (req,res)=>{
    try {
        const messages = await MessagesModel.find({$or:[{sender_id: req.body._id_1,recipient_id:req.body._id_2},
                                                        {sender_id: req.body._id_2,recipient_id:req.body._id_1}]});
        
        res.json({ status: 200, messages })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateMessage = async (req,res)=>{
    try{
        const message = await MessagesModel.findOne({_id:req.body.message_id});
        message.content = req.body.content;
        message.save();
        res.status(200).json({message:message})
    }catch (error){
        res.status(500).json({message:error.message})
    }
}
const updateStatus = async (req,res,status) =>{
    try{
        const message = await MessagesModel.findOne({_id:req.body.message_id});
        message.status = status;
        message.save();
        res.status(200).json({message:message})
    }catch (error){
        res.status(500).json({message:error.message})
    }
}
const readMessage = async (req,res)=>{
    updateStatus(req,res,2)
}
const deleteMessage = async (req,res)=>{
    updateStatus(req,res,0)
}



module.exports ={newMessage,updateMessage,deleteMessage,readMessage,getMessages}