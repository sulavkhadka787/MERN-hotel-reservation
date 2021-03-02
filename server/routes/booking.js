const express=require('express');
const router=express.Router();

//middlewares
const {authCheck}=require('../middlewares/auth');

//controllers
const {book,listBooking}=require('../controllers/booking');
const {confirmRoom}=require('../controllers/room');

//routes
router.post('/booking',authCheck,book);
router.put('/confirmRoom',authCheck,confirmRoom);
router.get('/payment/:id',authCheck,listBooking);

module.exports=router;