import React from 'react';

const Register=()=>{
    return(

        <div className="bckground">
            <h1>Hotel Shangri-La</h1>
            <div className="in-bck">
            <h2>Register your account</h2>
                <form action="/action_page.php" className="bg-img">

                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" required />

                    <button type="submit" className="btn">Login</button>
                </form>
            
            </div>
         </div>

    )
}

export default Register;