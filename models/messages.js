const mongoose = require('mongoose');

const adressSchema = new mongoose.Schema({
    city: String,
    ref: String
})
const dataSchema = new mongoose.Schema({

    sender_id: {

        type: String
    },
    recipient_id: {
        type: String
    },
    content: {
        type: String
    },
    createDAte: {
        type: Date,
        default: () => Date.now()
    },
    updateDate: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('messages', dataSchema)