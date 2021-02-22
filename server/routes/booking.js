const express=require('express');
const router=express.Router();

//middlewares
const {authCheck}=require('../middlewares/auth');

//controllers
const {book}=require('../controllers/booking');

//routes
router.post('/booking',authCheck,book);

module.exports=router;