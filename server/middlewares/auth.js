const admin=require('../firebase');

exports.authCheck=(req,res,next)=>{
    console.log('headersxxxxxxx',req.headers);
    next();
}