import React from 'react';

const Register=()=>{
    return(

        <header className = "header" id = "header">
                <h2>Hotel Shangri-La Registration</h2>
                <div>
                    <form className = "book-form">
                        <div className = "form-item">
                            <label htmlFor = "email">Enter your email address</label>
                            <input type = "email" id = "email" />
                        </div>
                        <div className = "form-item item-submit">
                            <input type = "submit" className = "btn register-btn" value = "Register" />
                        </div>
                    </form>
                </div>
            
    </header>

    )
}

export default Register;