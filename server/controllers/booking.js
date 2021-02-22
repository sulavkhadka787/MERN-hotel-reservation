const Booking=require('../models/booking');

exports.book=async(req,res)=>{
    try{
       res.send("hello world");
    }catch(e){
        console.log(e);
    }
}