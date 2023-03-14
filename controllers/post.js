const connectDB =  require("../database/db.js")
const postModel =  require("../models/post.js")
const express = require('express');
const multer = require("multer")
const app = express();
const bodyParser = require("body-parser"); 
app.use(bodyParser.json());
const fs =  require('fs-extra')
const path = require('path')

//storage

const Storage = multer.diskStorage({
    destination:"public/images/",
    filename:(req, file, cb)=>{
         cb(null, file.originalname)
    }
})

const Uploads = multer({
    storage:Storage, 
}).single("image")

const postForm = async (req, res) =>{
//  console.log(req.file)
// console.log('here i am')
//  console.log(req)
//  console.log(res.body)
//    try {
    connectDB()
    
    const post = await postModel.create({
        category:req.body.category,
        title:req.body.title,
        desc:req.body.desc,
        image:req.file.filename
        // image:{
        //     data:fs.readFileSync("images/" +req.file.filename),
        //     contentType:"image/png"
        // }
 })
    await post.save()
    res.redirect('/')
//     res.status(200).json({
//         succeed:true,
//         message:"added successfully"
//     })
   
//    } catch (error) {
//      res.status(500).json({
//         succeed:false,
//         message:error.message
//     })
//    }
}

const addPost = async (req, res) =>{
       res.render('addPost',)
    }

const deletePost = async (req, res) =>{
    try {
        connectDB()
        await postModel.findOneAndDelete({seq})
   
       res.status(200).json({
        success: true,
        message:"Post Deleted successfully"
       })
    } catch (error) {
        res.status(500).json({
           success: false,
           message:error.message
        })
    }
}

const home = async (req, res) =>{
    let data;
    // try {
        connectDB()
       data = await postModel.find({})
       let data1= data
       console.log(data)
      
    //    console.log(data)
        // const nData =  Object.assign({}, data)
        // console.log(nData)
        // res.status(200).json({
        //     success:true,
        //     message:"Data queried Successfully",
        //     data:data
        // })
     
            // console.log(res.title)
      
                // console.log(res.image.data)
          
                // let bufferObj = Buffer.from(res.image.data, "utf8"); 
                // let base64String = bufferObj.toString("base64");
                // console.log(base64String)
      
 
        
    // } catch (error) {
    //     res.status(500).json({
    //         success:false,
    //         message:error.message,
    //         data:data
    //     })
    // }
    // console.log(data);
    res.render('home', {data:data})
}

const howTo = async (req,res) =>{
   let howToData
   let category = req.body.category
    try {
        connectDB()
        howToData = await postModel.find({category:category})

        res.status(200).json({
            success:true,
            message:"Data queried successfully",
            data:howToData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
            data:howToData
        })
    }
    
}

const ifItIs = async (req,res) =>{
    let howToData
    let category = req.body.category
     try {
         connectDB()
         howToData = await postModel.find({category:category})
 
         res.status(200).json({
             success:true,
             message:"Data queried successfully",
             data:howToData
         })
     } catch (error) {
         res.status(500).json({
             success:false,
             message:error.message,
             data:howToData
         })
     }
     
 }
 
const post = async (req,res, url) =>{
    // console.log('url')
    // console.log(url)
      
    connectDB()
    const data = await postModel.findOne({category:url})

    console.log('data')
    console.log(data)
    


    res.render('post',{data})
}

const contact = async (req,res, url) =>{
    res.render('contact')
}




module.exports = {
    addPost, 
    deletePost,
    home, 
    howTo, 
    ifItIs ,
    Uploads,
    postForm,
    post,
    contact
}

