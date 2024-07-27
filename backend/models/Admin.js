const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required:true,
    },
    contact: {
        type: String,
    }
});
const Doctor = mongoose.model("Doctor", DoctorSchema);