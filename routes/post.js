const express = require("express")
const postControllers = require("../controllers/post.js")
  


const router = express.Router()

router.post("/postform",postControllers.Uploads,(req,res)=>{
    postControllers.postForm(req,res)
})

router.get("/addpost",postControllers.Uploads,(req,res)=>{
    postControllers.addPost(req,res)
})

router.get('/post/:id', (req, res)=>{
    const url = req.params.id
    console.log(url)
    postControllers.post(req,res,url)
})

router.post("/deletepost",(req,res)=>{
    postControllers.deletePost(req,res)
})

router.get("/", (req, res)=>{
    postControllers.home(req,res)
})

router.post("/howto",(req,res)=>{
    postControllers.howTo(req,res)
})

router.post("/ifitis",(req,res)=>{
    postControllers.ifItIs(req,res)
})

module.exports  = router