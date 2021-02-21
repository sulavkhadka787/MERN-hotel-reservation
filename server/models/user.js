const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema;

const userSchema=new mongoose.Schema(
    {
        fullname:String,
        email:{
            type:String,
            required:true,
            index:true
        },
        role:{
            type:String,
            default:"guest"
        },
        reservations:{
            type:Array,
            default:[]
        },
        address:String
    },
    {timestamps:true}
)

module.exports=mongoose.model("User",userSchema);