const Booking=require('../models/booking');

exports.book=async(req,res)=>{
    try{
       const {checkIn,checkOut,adultNum,childNum,totalRooms,email}=req.body;
       let dateIn=checkIn.split('-');
       let dateOut=checkOut.split('-');
       let newcheckInDate=new Date(dateIn[0],dateIn[1]-1,dateIn[2]);
       let newcheckoutDate=new Date(dateOut[0],dateOut[1]-1,dateOut[2]);
       const newBooking=await new Booking(
                                {checkInDate:newcheckInDate,
                                    checkOutDate:newcheckoutDate,
                                    adults:adultNum,
                                    children:childNum,
                                    room:totalRooms,
                                    email:email
                                }).save();
        res.json(newBooking);      
    }catch(e){
        console.log(e);
        res.status(400).json({
            err:err.message
        })
    }
}

// exports.confirmRoom=async(req,res)=>{
//     try{
//         console.log(req.body);
//         const {roomType,price,_id}=req.body;
//         const roomSelect=await Booking.findOneAndUpdate({_id},{roomType,price},{new:true});
//         res.json(roomSelect);
//     }catch(e){
//         res.status(400).send("Room addition failed");
//     }
// }

exports.listBooking=async(req,res)=>{
    const booking=await Booking.findOne({_id:req.params.id})
                    .populate("roomType")
                    .exec();
    console.log('===============booking',booking,"===================");
    res.json(booking);
}