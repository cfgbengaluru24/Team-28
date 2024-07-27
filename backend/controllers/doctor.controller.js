import bcrypt from "bcrypt"
import Doctor from "../models/Doctor.js"
import Patient from "../models/Patient.js"
import jwt from "jsonwebtoken"
import Records from "../models/Records.js";
import Patient  from "./models/Patient.js";


export const register = async (req,res) =>{
    //ops
    try{
        const {name, email, password, isVolunteer, contact, speciality} = req.body;
        if(!name || !email || !password ||!contact || !speciality) {
            res.status(400);
            throw new Error("PLease Enter all the Fields");
        }
        const userExists = await Doctor.findOne({email});
        if(userExists) {
            res.status(400).json({message: "User Already Exists"});
        }
        const hashedPassword = await bcrypt.hash(password,8);
        const newUser = new Doctor({
            name: name,
            email:email,
            password:hashedPassword,
            contact: contact,
            speciality:speciality
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
        const user = await Doctor.findOne({email:email});
        if (!user){
            res.status(401).json({"message" : "Username does not exists"})
        }
        const validPassword = await bcrypt.compare(password,user.password);
        
        if (validPassword){
             const token = jwt.sign({id : user._id},process.env.SECRET_KEY,{ expiresIn: "1h"})
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

export const addPatient = async (req,res) => {
    try{
        const { name, govtId, DoB, gender, blood_group, location, contact } = req.body;
        const patient = await Patient.findOne({govtId:govtId});
        if (user){
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
        res.status(201).json({message: "Patient successfully created!"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

export const findPatientByGovtId = async (req, res) => {
    try {
        const patient = await Patient.findOne({ govtId: req.body.govtId });
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({
            name: patient.name,
            dob: patient.dob,
            gender: patient.gender,
            blood:patient.blood,
            location:patient.location,
            Records: patient.Records
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const findPatientByName = async (req, res) => {
    try {
        const patients = await Patient.find({ name: req.body.name });
        if (patients.length === 0) {
            return res.status(404).json({ message: 'No patients found' });
        }
        res.status(200).json({
            name: patient.name,
            dob: patient.dob,
            gender: patient.gender,
            blood:patient.blood,
            location:patient.location,
            Records: patient.Records
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const findPatientByLocation = async (req, res) => {
    try {
        const patients = await Patient.find({ location: req.body.location });
        if (patients.length === 0) {
            return res.status(404).json({ message: 'No patients found' });
        }
        res.status(200).json({
            name: patient.name,
            dob: patient.dob,
            gender: patient.gender,
            blood:patient.blood,
            location:patient.location,
            Records: patient.Records
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
