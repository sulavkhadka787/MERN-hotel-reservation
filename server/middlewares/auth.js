const admin=require('../firebase');

exports.authCheck=async(req,res,next)=>{
    //console.log('headersxxxxxxx',req.headers);
    try{
        const firebaseUser=await admin.auth().verifyIdToken(req.headers.authtoken);
        console.log('FIREBASE USER IN AUTHCHECK',firebaseUser);
        req.user=firebaseUser;
    }catch(err){
        res.status(401).json({
            err:"Invalid or expired token"
        })
    }
    next();
}