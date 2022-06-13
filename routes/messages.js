const express = require('express');
const { authentificationToken } = require("./function.js");
const messagesRouter = express.Router();
const {newMessage,updateMessage,deleteMessage,readMessage,getMessages} = require("../logic/messages")

messagesRouter.post('/newMessage', newMessage)
messagesRouter.post('/updateMessage',updateMessage)
messagesRouter.post('/deleteMessage', deleteMessage)
messagesRouter.post('/readMessage', readMessage)
messagesRouter.post('/getMessages', getMessages)


module.exports = { messagesRouter };