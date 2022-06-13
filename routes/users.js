const express = require('express');
const usersRouter = express.Router();

const { authentificationToken } = require("./function.js");
const {newUser,login,testAuth,getUsers,getUser} = require("../logic/users")
//Get all Method
usersRouter.post('/newUser/', newUser)
usersRouter.post('/login', login)
usersRouter.post('/getUser', getUser)
//Le route testAuth permet d'avoir un token pour faire un test provisoire
usersRouter.get('/testAuth', authentificationToken, testAuth)
usersRouter.get('/getUsers',getUsers);

module.exports = { usersRouter };