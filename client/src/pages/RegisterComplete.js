import React,{useState,useEffect} from 'react';
import {auth} from '../firebase';
import {toast} from 'react-toastify';
import {useDispatch,useSelector} from 'react-redux';
import {createOrUpdateUser} from '../functions/auth';

const RegisterComplete=({history})=>{
    const [email,setEmail]=useState('');
    const[fullname,setFullname]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');

    const {user}=useSelector((state)=>({...state}));
    let dispatch=useDispatch();

    useEffect(()=>{
        setEmail(window.localStorage.getItem("emailForRegistration"));
        // console.log(window.location.href);
        // console.log(window.localStorage.getItem("emailForRegistration"));
    },[]);

     const handleSubmit=async(e)=>{
        e.preventDefault();

        //validation
        if(!email || !password){
            toast.error("Email and Password is required");
            return;
        }

        if(password.length < 6){
            toast.error("Password must be min six character long");
            return;
        }

        if(password !==confirmPassword){
            toast.error("Password and Confirm Password donot match");
            return;
        }

        let name=fullname.toLowerCase();
        try{
            const result=await auth.signInWithEmailLink(email,window.location.href);
            //console.log(auth);
            //console.log(result);
            if(result.user.emailVerified){
                //remove the user from local storage
                window.localStorage.removeItem("emailForRegistration");

                //get user id token
                let user=auth.currentUser;
                await user.updatePassword(password);
                await user.updateProfile({
                    displayName:name
                })
                const idTokenResult=await user.getIdTokenResult();

                //redux state
                createOrUpdateUser(idTokenResult.token)
                .then((res)=>{
                    dispatch({
                        type:"LOGGED_IN_USER",
                        payload:{
                            name:res.data.name,
                            email:res.data.email,
                            token:idTokenResult.token,
                            role:res.data.role,
                            _id:res.data._id
                        }
                    })
                })
                .catch();
                //redirect
                history.push('/');
            }
        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
        
    }

    return(

        <div className="bckground">
           
            <h1>Hotel Shangri-La</h1>
            <div className="in-bck">
            <h2>Complete Registration</h2>
            
                <form onSubmit={handleSubmit} className="bg-img">

                    <label htmlFor="email"><b>Email</b></label>
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        name="email" 
                        required 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} 
                        disabled   
                    />

                    <label htmlFor="fullname"><b>Fullname</b></label>
                    <input 
                        type="text" 
                        placeholder="Enter your fullname" 
                        name="fullname" 
                        required 
                        onChange={(e)=>setFullname(e.target.value)} 
                    />

                    <label htmlFor="password"><b>Password</b></label>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        name="password" 
                        required  
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
                    <input 
                        type="password" 
                        placeholder="Enter Password again" 
                        name="confirmPassword" 
                        required 
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />

                    <button type="submit" className="btn">Register</button>
                </form>
            
            </div>
         </div>

    )
}

export default RegisterComplete;