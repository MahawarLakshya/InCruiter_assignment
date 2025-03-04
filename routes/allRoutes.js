const express=require('express')
const auth=require('../middleware/auth')
const registerUser=require('../controller/register')
const loginUser=require('../controller/login')
const logoutUser=require('../controller/logout')
const resetPassword=require('../controller/resetpwd')


const router=express.Router()
router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/reset',auth,resetPassword);
router.get('/logout',logoutUser);


module.exports=router

