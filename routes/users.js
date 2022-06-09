const express = require('express');
const jwt = require('jsonwebtoken')
const usersRouter = express.Router();
const UserModel = require("../models/users.js")
//Get all Method
usersRouter.get('/', async (req, res) => {

    try {
        const data = await UserModel.find({ _id: "62a19fcdf975c260e60b1f66" })
        /*
        const user = await UserModel.create({ name: "King", age: 32, adress: { city: "Tananarivo", ref: "Lot 24 MS II TER Mok" } })
        user.name = "Stay humble what ever happen";
        user.save();*/
        res.json(data)
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
const authentificationToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        //console.log("user", user)
        next();
    })
}
usersRouter.get('/testAuth', authentificationToken, (req, res) => {
    console.log(req.user)
    res.sendStatus(200)
})

module.exports = { usersRouter };