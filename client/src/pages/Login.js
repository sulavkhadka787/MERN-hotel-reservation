import React,{useState} from 'react';

const Login=()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.table(email,password);
    }

    return(

        <div className="bckground">
            <h1>Hotel Shangri-La</h1>
            <div className="in-bck">
            <h2>Please Login</h2>
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
                    disabled= {!email || password.length<6}
                    >
                        Login
                    </button>
                    <button type="submit" className="google-btn google"><i class="fa fa-google fa-fw">
          </i> Login with Google
        </button>
                </form>
            
            </div>
         </div>

    )
}

export default Login;