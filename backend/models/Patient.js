const mongoose = require('mongoose')
const Records = require("./Records.js")

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
        enum:['Male',"Female"],
        required:true,
    },
    blood_group:{
        type:String,
    },
    location:{
        type:String,

    },
    contact:{
        type:Number
    },
    records:{
        type: [Records],
        default : [] 
    }
})