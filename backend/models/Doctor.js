const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 20,
    }, 
    email: {
        type: String,
        required: true,
    },
    password: {
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
    contact: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },

});
const Doctor = mongoose.model("Doctor", DoctorSchema);