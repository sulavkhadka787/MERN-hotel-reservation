import React from 'react';
import firebase from 'firebase';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Header=()=>{
   
    const toggle=()=>{
        let sideNav=document.getElementById('sidenav');
        sideNav.classList.toggle('show');
    }

    const close=()=>{
        let sideNav=document.getElementById('sidenav');
        sideNav.classList.remove('show');
    }
    
    let dispatch=useDispatch();
    let {user}=useSelector((state)=>({...state}));

    let history=useHistory();

    const logout=()=>{
        firebase.auth().signOut();
        dispatch({
            type:"LOGOUT",
            payload:null
        });
        localStorage.removeItem('user-state');

        history.push("/login");
    }
   
    return(

        <>
        <header className = "header" id = "header">
            <div className = "head-top">
                <div className = "site-name">
                    <span>Hotel Shangri-La</span>
                </div>
                <div className = "site-nav" onClick={toggle}>
                    <span id = "nav-btn">MENU <i className = "fas fa-bars"></i></span>
                </div>
            </div>

            <div className = "head-bottom flex">
            <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est quos veniam impedit numquam itaque voluptatum, dicta asperiores accusamus, eligendi neque ut incidunt, modi harum molestiae atque natus officia minima.</p>
            <button type = "button" className = "head-btn">GET STARTED</button>
            </div>
           
        </header>
        
        <div className = "sidenav" id = "sidenav">
            <span className = "cancel-btn" id = "cancel-btn" onClick={close}>
                <i className = "fas fa-times"></i>
            </span>
            <ul className = "navbar">
                {user && (<li className="user">Hello <span>&nbsp;</span> {user.email && user.email.split('@')[0]}</li>)}
                <li><a href = "#header">home</a></li>
                <li><Link  to="/mybookings">My Bookings</Link></li>
                <li><a href = "#rooms">rooms</a></li>
                <li><a href = "#customers">customers</a></li>
            </ul>
            {!user && (
                <button className = "btn sign-up"><a href="/register">sign up</a></button>
            )}
            {!user && (
                <button className = "btn log-in"><a href="/login">log in</a></button>
            )}
            {user && (
                <button className = "btn log-in" onClick={logout}><a href="/login">Log Out</a></button>
            )}
            
        </div>
        </>
    );
}

export default Header;