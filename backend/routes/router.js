const express = require('express')
const router = new express.Router()

//for user registeration
router.post('/register', async(req, res) =>{
    console.log(req.body)
})

module.exports = router
