import React,{useState} from 'react';
import {auth} from '../firebase';
import {toast} from 'react-toastify';


const Register=()=>{
    const [email,setEmail]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const config={
            url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp:true
        };

        await auth.sendSignInLinkToEmail(email,config);
        toast.success(`Please check ${email} and click on the link to complete registration`);

        //save user email in local storage
        window.localStorage.setItem('emailForRegistration',email);

        //clear state
        setEmail("");
    }

    return(

        <div className="bckground">
           
            <h1>Hotel Shangri-La</h1>
            <div className="in-bck">
            <h2>Register your account</h2>
            
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

                    <button type="submit" className="btn">Submit</button>
                </form>
            
            </div>
         </div>

    )
}

export default Register;