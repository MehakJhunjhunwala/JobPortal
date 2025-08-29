import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    requirments: [{
        type:String,
    }],
    Salary: {
        type: Number,
        required: true,
       
    },
    location: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    position:{
        type: Number,
        required: true,
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required: true,
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    applications:[                 //I would not keep this cause why doing data duplication mate
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Application",
            
        }
    ]
    
},{timestamps:true});

export default mongoose.model("Job", userSchema);