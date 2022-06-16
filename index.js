require('dotenv').config();
require("./db/config.js")
const express = require('express');
const cors = require('cors');
const app = express();
const http = require("http")
const {Server} = require("socket.io")

const { usersRouter } = require("./routes/users.js")
const { messagesRouter } = require("./routes/messages.js")
const {roomsRouter} = require("./routes/rooms")
app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
app.use("/rooms", roomsRouter);
const PORT = process.env.PORT || 5003;

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})
io.on("connection",(socket)=>{
    console.log(`User Connected:${socket.id}`)
    socket.on("SEND_DATA", (data)=>{
        console.log(data)
        socket.broadcast.emit("RECEIVE_DATA",data)
        
    })
})

server.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING");
})
/*
app.listen(PORT, () => {

    console.log(`Server listen : ${PORT}`)
})*/