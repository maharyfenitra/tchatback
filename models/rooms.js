const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    name: {

        type: String
    }
})

module.exports = mongoose.model('rooms', dataSchema)