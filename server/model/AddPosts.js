const mongoose = require('mongoose');
const collegepostSchema = new mongoose.Schema({
    Organisation: {
        type: String,
        required: true,
    },
    Branch: {
        type: String,
        required: true,
    },
    Experience:{
        type: String,
        required: true,
    },
    Designation:{
        type:[
            {
                type: String,
                enum : ["UG","PG","PHD"],
            }
        ]
    },
    NoOfOpenings: {
        type: String,
        required: true,
    },
    Salary: {
        type: String,
        required: true,
    },
    College:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Signup",
        }
    ]
})

const collegePost = mongoose.model("Posts",collegepostSchema)
module.exports = collegePost;