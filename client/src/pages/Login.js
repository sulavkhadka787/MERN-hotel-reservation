import React from 'react';

const Login=()=>{
    return(

        <div className="bckground">
            <h1>Hotel Shangri-La</h1>
            <div className="in-bck">
            <h2>Please Login</h2>
                <form action="/action_page.php" className="bg-img">

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" className="btn">Login</button>
                </form>
            
            </div>
         </div>

    )
}

export default Login;