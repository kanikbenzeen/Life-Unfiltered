
const connectDB =  require("../database/db.js")
const userModel =  require("../models/user.js")


const validateUser = async (req, res) =>{
    let  data
    try {

        data = {
        name:name,
        password :password
        }
        connectDB();
        await userModel.find(data, (data)=>{    
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
            message:"unathorize",
            data:data
        })
    }

}  



module.exports = {validateUser}