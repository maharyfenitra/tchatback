const { Router } = require('express');
const express = require('express');
const {newRoom,deleteRoom} = require("../logic/rooms")
const roomsRouter = express.Router();
roomsRouter.post("/newRoom",newRoom);
roomsRouter.post("/deleteRoom",deleteRoom);

module.exports = {roomsRouter}
