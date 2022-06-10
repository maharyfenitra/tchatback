const express = require('express');
const { authentificationToken } = require("./function.js");
const messagesRouter = express.Router();
const MessagesModel = require("../models/messages.js")


messagesRouter.post('/', authentificationToken, async (req, res) => {
    try {
        const message = await MessagesModel.create({ sender_id: req.body.sender_id, recipient_id: req.body.recipient_id, content: req.body.content })
        res.json({ status: 200, message })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = { messagesRouter };