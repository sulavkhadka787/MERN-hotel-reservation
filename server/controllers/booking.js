const Booking=require('../models/booking');

exports.book=async(req,res)=>{
    try{
       console.log(req.body);
       const {checkIn,checkOut,adultNum,childNum,totalRooms}=req.body;
       let dateIn=checkIn.split('-');
       let dateOut=checkOut.split('-');
       let newcheckInDate=new Date(dateIn[0],dateIn[1]-1,dateIn[2]);
       let newcheckoutDate=new Date(dateOut[0],dateOut[1]-1,dateOut[2]);
       console.log(newcheckInDate,'and',newcheckoutDate);
       const newBooking=await new Booking(
                                {checkInDate:newcheckInDate,
                                    checkOutDate:newcheckoutDate,
                                    adults:adultNum,
                                    children:childNum,
                                    room:totalRooms
                                }).save();
        res.json(newBooking);      
    }catch(e){
        console.log(e);
        res.status(400).json({
            err:err.message
        })
    }
}

