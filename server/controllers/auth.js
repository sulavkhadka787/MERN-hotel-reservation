const User=require('../models/user');

exports.createOrUpdateUser=async(req,res)=>{
    //console.log('controller=req-user',req.user)
    const {name,email}=req.user;
    const user=await User.findOneAndUpdate({email},{name},{new:true});

    if(user){
        //console.log("user-updated",user);
        res.json(user);
    }else{
        const newUser=await new User({
            email:email,
           name:name
        }).save();
        //console.log('user-created',newUser);
        res.json(newUser);
        
    }
}

exports.currentUser=async(req,res)=>{
    User.findOne({email:req.user.email}).exec((err,user)=>{
        if(err) throw new Error(err);
        console.log('user====',user);
        res.json(user);
    })
}


