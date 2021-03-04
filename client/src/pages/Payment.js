import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {bookingDetails} from '../functions/booking';

const Payment=({match,history})=>{

    const [finalbooking, setBooking]=useState();
    
    const {user}=useSelector((state)=>({...state}));
    const {booking}=useSelector(state=>({...state}));

    const dispatch=useDispatch();

    const {id}=match.params;

    useEffect(()=>{
        loadBookingDetails();
        console.log('bookinguseeffect',booking);
        setBooking(booking);
        console.log('fina,l',finalbooking);
        
    },[finalbooking]);

    const loadBookingDetails=async()=>{
        try{
            await bookingDetails(id,user.token)
            .then((res)=>{
                console.log('resss',res);
                console.log('set-book',finalbooking);
                dispatch({
                    type:'BEGIN_BOOKING',
                    payload:{
                            checkInDate:res.data.checkInDate,
                            checkOutDate:res.data.checkOutDate,
                            adults:res.data.adults,
                            children:res.data.children,
                            room:res.data.room,
                            email:res.data.email,
                            _id:res.data._id,
                            roomType:res.data.roomType.roomType,
                            price:res.data.roomType.price
                    }
                })
                
                localStorage.setItem('initial-booking',JSON.stringify({ 
                    checkInDate:res.data.checkInDate,
                    checkOutDate:res.data.checkOutDate,
                    adults:res.data.adults,
                    children:res.data.children,
                    room:res.data.room,
                    email:res.data.email,
                    _id:res.data._id,
                    roomType:res.data.roomType.roomType,
                    price:res.data.roomType.price}));
                
            })
        }catch(e){
            console.log(e);
        }
        
    }

    const paymentHandler=()=>{
        history.push('/complete/payment')
    }
    
    return(
        <div className="payment-grid">
            <div className="payment-grid-body">
                <h3>Your Reservation Details</h3>
                <ul>
                    <li><div>Email:</div><div>{booking.email}</div></li>   
                    <li><div>Check-In:</div><div>{new Date(booking.checkInDate).toDateString()}</div></li>
                    <li><div>Check-Out:</div><div>{new Date(booking.checkOutDate).toDateString()}</div></li>
                    <li><div>Total Guests:</div><div>{booking.adults+booking.children}</div></li>
                    <li><div>Total rooms:</div><div>{booking.room}</div></li>
                    <li><div>Room Type:</div><div>{booking.roomType}</div></li>
                    <li><div>Total Price:</div><div>${booking.price}</div></li>
                </ul>
                <button className="room-select-btn" onClick={paymentHandler}>Complete Payment</button>
            </div>
        </div>
    )
}

export default Payment;
