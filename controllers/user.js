
const connectDB =  require("../database/db.js")
const userModel =  require("../models/user.js")


const validateUser = async (req, res) =>{
    console.log(req.body)
    // let  data
    let name = req.body.name
    let password = req.body.password
    try {
        connectDB();
        // data = {
        // name:name,
        // password :password
        // }
        
        await (await userModel.find(name, password)).
        then((data)=>{
             if(data){
                res.status(200).json({
                    success:true,
                    message:"User logged successfully",
                    data:data
                })
             }
        })
         

               
            
       
    

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
            data:data
        })
    }
    res.render('login',)
}  




module.exports = {validateUser}




