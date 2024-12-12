const express = require('express');
const cors = require('cors');
//const Signup = require('../server/model/Signup')
const UserRoute = require('../server/Routes/UserRoutes');
const mongoose = require("mongoose")

const app = express();

mongoose.connect('mongodb://localhost:27017/').then(() => console.log("connected")).catch((error) => console.log(error));

app.use(express.json());

const corsOpetions = {
  origin: ["http://localhost:5173", "http://localhost:5124"],
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
  Credentias: true,
};
app.use(cors(corsOpetions));

app.use('/user',UserRoute);

app.listen(2000, ()=>{
    console.log("Server is running")
})