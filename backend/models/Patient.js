const mongoose = require('mongoose')

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
})