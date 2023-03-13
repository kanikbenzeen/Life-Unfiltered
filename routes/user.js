const express = require("express")
const userControllers = require("../controllers/user.js")

const router = express.Router()

router.post("/user",(req, res)=>{
    console.log(req.body)
    userControllers.validateUser(req, res)
})





module.exports = router