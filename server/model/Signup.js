const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true,
   },
   email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  CollegePost:[
          {
              type: mongoose.Schema.Types.ObjectId,
              ref : "Posts",
          }
        ]
});

const SignupModel = mongoose.model("Signup", SignupSchema);

module.exports = SignupModel;