import bcrypt from "bcrypt"
import Admin from "../models/Admin.js"
import jwt from "jsonwebtoken"

export const register = async (req,res) =>{
    //ops
    try{
        const {name, email,password } = req.body;
        const hashedPassword = await bcrypt.hash(password,8);
        const newUser = new Admin({
            name:name,
            email:email,
            password:hashedPassword
        })
        await newUser.save()
        res.status(201).json({message: "Admin account successfully created!"});

    }
    catch(err){
        res.status(500).json({error:"Email already exists"});
    }
}

export const login = async (req,res) =>{
    //ops
    try{
        const {email,password} = req.body;
        // console.log(username,password);
        const admin = await Admin.findOne({email:email});
        if (!admin){
            res.status(401).json({"message" : "Username does not exists"})
        }
        const validPassword = await bcrypt.compare(password,admin.password);
        
        if (validPassword){
            const token = jwt.sign({email : admin.email},process.env.SECRET_KEY,{ expiresIn: "1h"})
            // res.status(200).json({Authorization: token});
            const time = 1000 * 60 * 60
            const {password, ...adminDetails} = admin._doc;
            // console.log(adminDetails)
            res.cookie("token",token, {
                httpOnly: true,
                // secure: true,
                maxAge: time,
            })
            .status(200)
            .json(adminDetails)

        }
        else{
            res.status(401).json({message:"Incorrect username/password"})
        }

    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

export const logout = (req,res) =>{
    //ops
    res.clearCookie("token").status(200).json({message: "Logout Successful"})
}


export const getHaemoglobinVsWeight = async (filter) => {
    try {
        const result = await Records.aggregate([
            {
                $project: {
                    _id: 0,
                    haemoglobin: 1,
                    weight: 1
                }
            },
            {
                $sort: { haemoglobin: 1 } // Sort by haemoglobin value
            },
            
        ]);

        console.log("Haemoglobin vs Weight Data:", result);
        return result;
    } catch (error) {
        throw new Error(err.message);
    }
};

export const doctorvsPatients = async (doctorId) => {
    try {
        const result = await Records.aggregate([
            {
                $group: {
                    
                }
            }
            
        ]);

        console.log("Haemoglobin vs Weight Data:", result);
        return result;
    } catch (error) {
        throw new Error(err.message);
    }
};