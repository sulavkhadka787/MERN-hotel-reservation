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
        type:Number,
        required:true
    },
    children:{
        type:Number,
        required:true
    },
    room:{
        type:Number,
        required:true
    },
    roomType:{
        type:ObjectId,
        ref:'Room'
    },
    email:{
        type:String,
        required:true,
        index:true
    },
    ratings:{
        star:Number,
        postedBy:{type:ObjectId,ref:"User"}

    }
},
{timestamps:true}
);

module.exports=mongoose.model("Booking",bookingSchema);