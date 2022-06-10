const express = require('express');
const jwt = require('jsonwebtoken')
const usersRouter = express.Router();
const UserModel = require("../models/users.js")
const { authentificationToken } = require("./function.js");
//Get all Method
usersRouter.get('/newUser/', async (req, res) => {

    try {
        const user = await UserModel.create({ name: req.body.name, age: req.body.age, adress: { city: req.body.city, ref: req.body.ref } })
        res.status(200).json({ message: "succed", user })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
usersRouter.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ token: accessToken })
})

usersRouter.get('/testAuth', authentificationToken, (req, res) => {
    console.log(req.user)
    res.sendStatus(200)
})

module.exports = { usersRouter };