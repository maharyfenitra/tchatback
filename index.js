require('dotenv').config();
require("./db/config.js")
const express = require('express');
const cors = require('cors');
const app = express();


const { usersRouter } = require("./routes/users.js")
const { messagesRouter } = require("./routes/messages.js")

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {

    console.log(`Server listen : ${PORT}`)
})