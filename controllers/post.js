const connectDB =  require("../database/db.js")
const postModel =  require("../models/post.js")
var express = require('express');
var app = express();
const bodyParser = require("body-parser"); 
app.use(bodyParser.json());



const addPost = async (req, res) =>{
//  let  title = req.body.title
//  let  desc = req.body.desc
//  let  category = req.body.category
//   let image = req.body.image

//    try {
//     connectDB()

//     const post = await postModel.create({})
//     await post.save()
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
res.render('addPost',)

}

const deletePost = async (req, res) =>{
    try {
        connectDB()
        await postModel.findOneAndDelete({seq:2})
   
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
    let data
    // try {
    //     connectDB()
    //    data = await postModel.find({})
    //     console.log(data)

    //     res.status(200).json({
    //         success:true,
    //         message:"Data queried Successfully",
    //         data:data
    //     })
        
    // } catch (error) {
    //     res.status(500).json({
    //         success:false,
    //         message:error.message,
    //         data:data
    //     })
    // }
    res.render('home',)
}

const post = async (req,res) =>{
    res.render('post',)
}

const login = async (req,res) =>{
    res.render('login',)
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


module.exports = {
    addPost, 
    deletePost,
    home, 
    howTo, 
    ifItIs ,
    post,
    login
}

