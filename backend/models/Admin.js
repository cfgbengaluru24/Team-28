const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    isVolunteer: {
        type: Boolean,
        default: false,
    },  
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    }],
    password: {
        type:String,
        required:true,
    },
    contact: {
        type: String,
    }
});
const Doctor = mongoose.model("Doctor", DoctorSchema);