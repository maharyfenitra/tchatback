const express = require('express');

const router = express.Router();


//Get all Method
router.get('/', async (req, res) => {
    res.json({ status: 200 })

})

module.exports = { router };