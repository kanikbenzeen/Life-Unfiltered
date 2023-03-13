
const connectDB =  require("../database/db.js")
const userModel =  require("../models/user.js")


const validateUser = async (req, res) =>{
    console.log(req.body)
    // // let  data
    let email = req.body.email
    let password = req.body.password
    // try {
        connectDB();
        let data = {
        email:email,
        password :password
        }
        
        const nData =  await userModel.findOne(data)
      
         if(nData){
            res.redirect('/addpost')
         }
          else{
            res.redirect('/')
          }
               
            // console.log('ndata')
            // console.log(nData)
       
    

    // } catch (error) {
    //     res.status(500).json({
    //         success:false,
    //         message:error.message,
    //         data:data
    //     })
    // }
    // res.render('login',)
}  

const validateUsers = async (req, res) =>{
    res.render('login',)
}  



module.exports = {validateUser,validateUsers}




