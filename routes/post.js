const express = require("express")
const postControllers = require("../controllers/post.js")

const router = express.Router()

router.post("api/v1/addpost",(req,res)=>{
    postControllers.addPost(req,res)
})
router.post("api/v1/deletepost",(req,res)=>{
    postControllers.deletePost(req,res)
})

router.get("/", (req, res)=>{
    postControllers.home(req,res)
})

router.get("/post", (req, res)=>{
    postControllers.post(req,res)
})

router.get("/addpost", (req, res)=>{
    postControllers.addPost(req,res)
})

router.get("/login", (req, res)=>{
    postControllers.login(req,res)
})

router.post("api/v1/howto",(req,res)=>{
    postControllers.howTo(req,res)
})

router.post("api/v1/ifitis",(req,res)=>{
    postControllers.ifItIs(req,res)
})

module.exports  = router