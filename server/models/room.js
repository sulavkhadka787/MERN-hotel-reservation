const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema;

const roomSchema=mongoose.Schema({
    roomType:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    bookingId:{
        type:ObjectId,
        ref:'Booking'
    }
},

{timeStamps:true}

);

module.exports=mongoose.model('Room',roomSchema);