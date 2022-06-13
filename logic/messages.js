const MessagesModel = require("../models/messages.js")

const newMessage = async (req, res) => {
    try {
        const message = await MessagesModel.create({ sender_id: req.body.sender_id, recipient_id: req.body.recipient_id, content: req.body.content })
        res.json({ status: 200, message })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateMessage = async (req,res)=>{

}
const readMessage = async (req,res)=>{
    
}
const deleteMessage = async (req,res)=>{

}

module.exports ={newMessage,updateMessage,deleteMessage}