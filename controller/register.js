const bcrypt=require('bcrypt');
const user=require('../model/user')
const registerUser=async(req,resp)=>{
    try{
        const {email,password}=req.body
        
        const alreadyUser=await user.findOne({email})
        if(alreadyUser)
            return resp.status(400).json({message:"User already exist"})
        else
        {
            const hashedPassword=await bcrypt.hash(password,10);
            const newUser=new user({email,password:hashedPassword})
            await newUser.save()
            
            resp.status(201).json({ message: "User registered successfully" });
        }
    }
    catch(err)
    {
        resp.status(500).json({ message: "Error occured:", err });
    }
}
module.exports=registerUser