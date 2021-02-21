const express=require('express');
const router=express.Router();

router.get('/user',(req,res)=>{
    res.json({
        data:"you are in get user api"
    })
})

module.exports=router;