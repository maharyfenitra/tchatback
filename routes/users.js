const express = require('express');
const usersRouter = express.Router();

const { authentificationToken } = require("./function.js");
const {newUser,login,testAuth} = require("../logic/users")
//Get all Method
usersRouter.get('/newUser/', newUser)
usersRouter.post('/login', login)
//Le route testAuth permet d'avoir un token pour faire un test provisoire
usersRouter.get('/testAuth', authentificationToken, testAuth)

module.exports = { usersRouter };