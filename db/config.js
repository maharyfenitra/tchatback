const mongoose = require('mongoose');
mongoose.connect(process.env.URL_DB);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})
module.exports = { database }