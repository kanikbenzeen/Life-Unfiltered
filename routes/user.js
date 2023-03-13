const express = require("express")
const userControllers = require("../controllers/user.js")

const router = express.Router()

router.get("/auth/user",(req, res)=>{
    console.log(req.body)
    userControllers.validateUsers(req, res)
})

router.post("/user",(req, res)=>{
    console.log(req.body)
    userControllers.validateUser(req, res)
})






module.exports = router