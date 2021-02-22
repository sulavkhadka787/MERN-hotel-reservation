const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema;

const bookingSchema=mongoose.Schema({
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
    }
},
{timestamps:true}
);

module.exports=mongoose.model("Booking",bookingSchema);