const express = require("express")
const userControllers = require("../controllers/user.js")

const router = express.Router()

router.post("/user",(req, res)=>{
    userControllers.validateUser(req, res)
})





module.exports = router