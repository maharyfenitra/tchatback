const mongoose = require('mongoose');

const adressSchema = new mongoose.Schema({
    city: String,
    ref: String
})
const dataSchema = new mongoose.Schema({

    name: {

        type: String
    },
    firstname: {

        type: String
    },
    mail: {

        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    adress: adressSchema,
    createDAte: {
        type: Date,
        default: () => Date.now()
    },
    updateDate: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('users', dataSchema)