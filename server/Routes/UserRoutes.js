const express = require('express')
const {Signups, Logins, GetUser} = require('../controllers/SignupControllers')
const verifyTokens = require('../Middleways/VerifyTokens');
const { collegePost } = require('../controllers/AddpostController');
const router = express.Router();
router.post('/Signup',Signups);
router.post('/Login',Logins);
router.get('/GetUser',verifyTokens,GetUser);
router.post('/addPost',verifyTokens,collegePost)
module.exports = router;