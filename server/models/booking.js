const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema;

const bookingSchema=new mongoose.Schema({
    checkInDate:{
        type:Date,
        required:true,
    },
    checkOutDate:{
        type:Date,
        required:true
    },
    adults:{
        type:String,
        required:true
    },
    children:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    roomType:{
        type:String
    },
    price:{
        type:Number
    }
},
{timestamps:true}
);

module.exports=mongoose.model("Booking",bookingSchema);