import React,{useState,useEffect} from 'react';
import {auth} from '../firebase';
import {toast} from "react-toastify";
import {useSelector} from 'react-redux';

const ForgotPassword=({history})=>{
    const [email,setEmail]=useState('');
    const [loading,setLoading]=useState('');

    const {user}=useSelector((state)=>({...state}));

    useEffect(()=>{
        if(user && user.token){
            history.push("/");
        }
    },[user]);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);

        const config={
            url:process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp:true
        }

        await auth.sendPasswordResetEmail(email,config)
            .then(()=>{
                setEmail('');
                setLoading(false);
                toast.success("Check your email for password reset link");
            })
            .catch((error)=>{
                setLoading(false);
                toast.error(error.message);
                console.log("ERROR MSG IN FORGOT PASSWORD", error);
            })
    }

    return(
        <div className="bckground">
           
        <div className="in-bck">
        {loading ? (
        <h2 className="text-danger">Loading</h2>
      ) : (
        <h2>Forgot Password</h2>
      )}
        
            <form onSubmit={handleSubmit} className="bg-img">

                <label htmlFor="email"><b>Email</b></label>
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    name="email" 
                    required 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    autoFocus
                />
                <button type="submit" className="btn">Register</button>
            </form>
        
        </div>
     </div>

)
}


export default ForgotPassword;




