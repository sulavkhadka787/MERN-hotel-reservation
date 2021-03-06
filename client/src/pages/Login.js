import React,{useState,useEffect} from 'react';
import {auth,googleAuthProvider} from "../firebase";
import {useDispatch,useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import {createOrUpdateUser} from '../functions/auth';

const Login=({history})=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);

    const {user}=useSelector((state)=>({...state}));

    useEffect(()=>{
        if(user && user.token){
            history.push("/");
        }
    },[user]);

    let dispatch=useDispatch();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        //console.table(email,password);
        setLoading(true);
        try{
            const result=await auth.signInWithEmailAndPassword(email,password);
            //console.log("xxx",result);
            const {user}=result;
            const idTokenResult=await user.getIdTokenResult();

            createOrUpdateUser(idTokenResult.token)
                .then((res)=>{
                    console.log('res-login',res);
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
                .catch(err=>console.log(err));
                history.push("/");
        }catch(error){
            console.log('errxxx',error.message);
            toast.error(error.message);
            setLoading(false);
        }

    }


    const googleLogin = async () => {
        auth
          .signInWithPopup(googleAuthProvider)
          .then(async (result) => {
            const { user } = result;
            //console.log('google-auth',result);
            const idTokenResult = await user.getIdTokenResult();
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
                .catch(err=>console.log(err));
                history.push("/");
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
      };

    return(

        <div className="bckground">
            <h1>Hotel Shangri-La</h1>
            <div className="in-bck">
                {loading ? (<h2>Loading....</h2>) : (<h2>Please Login</h2>)}
            
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

                    <label htmlFor="psw"><b>Password</b></label>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        name="password" 
                        required  
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button 
                    type="submit" 
                    className="btn" 
                    onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <button 
                        type="submit" 
                        className="google-btn google"
                        onClick={googleLogin}
                    >
                    <i className="fa fa-google fa-fw">
                    </i> Login with Google
                    </button>
                </form>
                <div className="forgot">
                <Link className="forgot-pass" to="/forgot/password">Forgot Password</Link> {"   "}
                <Link className="forgot-pass" to="/register">Register</Link>
                </div>
                
            </div>
         </div>

    )
}

export default Login;