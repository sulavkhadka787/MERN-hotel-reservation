const Booking =require('../models/booking');
const Room=require('../models/room');

exports.confirmRoom=async(req,res)=>{
    try{
        const {roomType,price,bookingId}=req.body;
        const newRoom=await new Room({
            roomType,
            price,
            bookingId
        }).save();
        const bookingUpdate=await Booking.findOneAndUpdate({_id:bookingId},{roomType:newRoom},{new:true});
        console.log('newroom',newRoom);
        console.log('book-id',bookingId);
        console.log('booking-update',bookingUpdate);
        res.json(bookingUpdate);
    }catch(err){
        res.status(400).json({
            err:err.message
        })
    }
}