const express = require('express');
const { authentificationToken } = require("./function.js");
const messagesRouter = express.Router();
const {newMessage,updateMessage,deleteMessage,readMessage} = require("../logic/messages")

messagesRouter.post('/newMessage', authentificationToken, newMessage)
messagesRouter.post('/updateMessage', authentificationToken, updateMessage)
messagesRouter.post('/deleteMessage', authentificationToken, deleteMessage)
messagesRouter.post('/readMessage', authentificationToken, readMessage)

module.exports = { messagesRouter };