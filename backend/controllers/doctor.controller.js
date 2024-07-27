// import bcrypt from "bcrypt"
// import Doctor from "../models/Doctor.js"
// import Patient from "../models/Patient.js"
// import jwt from "jsonwebtoken"

const bcrypt = require("bcrypt");
const Doctor = require("../models/Doctor.js");
const Patient = require("../models/Patient.js");
const jwt = require("jsonwebtoken");


export const register = async (req,res) =>{
    //ops
    try{
        const {name,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,8);
        const newUser = new Doctor({
            username:username,
            email:email,
            password:hashedPassword
        })
        await newUser.save()
        res.status(201).json({message: "User successfully created!"});

    }
    catch(err){
        res.status(500).json({error:"Incorrect email/password"});
    }
}

export const login = async (req,res) =>{
    //ops
    try{
        const {email,password} = req.body;
        // console.log(username,password);
        const user = await Doctor.findOne({username:username});
        if (!user){
            res.status(401).json({"message" : "Username does not exists"})
        }
        const validPassword = await bcrypt.compare(password,user.password);
        
        if (validPassword){
            // const token = jwt.sign({id : user._id},process.env.SECRET_KEY,{ expiresIn: "1h"})
            // res.status(200).json({Authorization: token});
            const time = 1000 * 60 * 60
            const {password, ...userDetails} = user._doc;
            // console.log(userDetails)
            res.cookie("token",token, {
                httpOnly: true,
                // secure: true,
                maxAge: time,
            })
            .status(200)
            .json(userDetails)
            // console.log("Sent")

        }
        else{
            res.status(401).json({message:"Incorrect username/password"})
        }
        // res.send(validPassword);

    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

export const logout = (req,res) =>{
    //ops
    res.clearCookie("token").status(200).json({message: "Logout Successful"})
}

export const addPatient = async (req,res) => {
    try{
        const { name, govtId, DoB, gender, blood_group, location, contact } = req.body;
        const {doctorId} = res.cookie;
        const patient = await Patient.findOne({govtId:govtId});
        if (patient){
            res.status(401).json({"message" : "Patient already exists"})
        }

        // Create a new patient
        const newPatient = new Patient({
            name,
            govtId,
            DoB,
            gender,
            blood_group,
            location,
            contact
        });

        // Save the patient and create a corresponding record
        const savedPatient = await newPatient.save();

        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            throw new Error('Doctor not found');
        }
        doctor.patients.push(newPatient._id);
        await doctor.save();

        res.status(201).json({message: "Patient successfully created!"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

