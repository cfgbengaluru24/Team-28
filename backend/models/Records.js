const mongoose = require("mongoose")

const recordsSchema = mongoose.Schema({
    date:{
        type: Date,
        required:true
    },
    docID:{
        type: String,
        required:true
    },
    comments:{
        type: String,
        default: ""
    },
    medication:{
        type: String,
        default: ""
    },
    symptoms:{
        type: String,
        default: ""
    },
    scan:{
        type: [String],
        default: []
    },
    haemoglobin:{
        type: Number,
    },
    weight:{
        type: Number,
    },
    height:{
        type: Number
    },
    bp: {
        type:Number
    }


});

const Records = mongoose.model("Records",recordsSchema);
export default Records;