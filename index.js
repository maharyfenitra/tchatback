require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const UserModel = require("./models/users.js")
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/tchat");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})




const { router } = require("./router.js");
const { usersRouter } = require("./routes/users.js")
const { messagesRouter } = require("./routes/messages.js")




app.use(express.json());
app.use(cors());


app.use("/API", router);
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {

    console.log(`Server listen : ${PORT}`)
})