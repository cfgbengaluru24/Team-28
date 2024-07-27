const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required:true,
    },
    name: {
        type: String,
        required: true
    }
});
const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;