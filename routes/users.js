const express = require('express');
const jwt = require('jsonwebtoken')
const usersRouter = express.Router();
const UserModel = require("../models/users.js")
const { authentificationToken } = require("./function.js");
//Get all Method
usersRouter.get('/newUser/', async (req, res) => {

    try {
        const user = await UserModel.create({ name: req.body.name, password: req.body.password, age: req.body.age, adress: { city: req.body.city, ref: req.body.ref } })
        res.status(200).json({ message: "successed", user })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
usersRouter.post('/login', async (req, res) => {
    //const username = req.body.username;
    const { username, password } = req.body;
    const user = await UserModel.find({ name: username, password })
        console.log(user)
            if(user.length>0){
                const accessToken = jwt.sign({ username, password }, process.env.ACCESS_TOKEN_SECRET)
                res.json({ token: accessToken, user: { username, password } })
            }else{
                res.status(401).json({message:"Erreur login ou mot de passe!"})
            }
})
usersRouter.get('/testAuth', authentificationToken, (req, res) => {
    console.log(req.user)
    res.sendStatus(200)
})

module.exports = { usersRouter };