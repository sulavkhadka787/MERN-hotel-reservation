const express=require('express');
const router=express.Router();

//middlewares
const {authCheck}=require('../middlewares/auth');

//controllers
const {book,listBooking,paymentComplete,mybookings}=require('../controllers/booking');
const {confirmRoom}=require('../controllers/room');

//routes
router.post('/booking',authCheck,book);
router.put('/confirmRoom',authCheck,confirmRoom);
router.get('/payment/:id',authCheck,listBooking);
//router.get('/complete/payment',authCheck,paymentComplete);
router.get('/config/paypal',paymentComplete);
router.post('/mybookings',authCheck,mybookings);

module.exports=router;