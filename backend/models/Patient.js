import mongoose from "mongoose";

const PatientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:20,
    },
    govtId:{
        type:String,
        required:true,
        min:2,
        max:20,
        unique: true
    },
    DoB:{
        type:Date,
        required :true,
    },
    gender: {
        type:String,
        enum:["Male","Female"],
        required:true,
    },
    blood_group:{
        type:String,
    },
    location:{
        type:String,

    },
    contact:{
        type:String
    },
    records:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Record" 
    }],
})

const Patient = mongoose.model("Patient",PatientSchema);
export default Patient;