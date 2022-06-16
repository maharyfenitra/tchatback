const { Router } = require('express');
const express = require('express');
const {newRoom,deleteRoom,getRooms} = require("../logic/rooms")
const roomsRouter = express.Router();
roomsRouter.post("/newRoom",newRoom);
roomsRouter.post("/deleteRoom",deleteRoom);
roomsRouter.get("/getRooms",getRooms);

module.exports = {roomsRouter}
