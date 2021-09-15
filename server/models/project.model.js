const mongoose = require('mongoose');

// Create the Schema for project
const ProjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"{PATH}  must be present"],
        minlength:[3,"{PATH} must be atleast 3 chars long"]
    }
},{timestamps:true});

// Instantiate the Schema
const MySchema = mongoose.model("MySchema",ProjectSchema)
module.exports = MySchema;