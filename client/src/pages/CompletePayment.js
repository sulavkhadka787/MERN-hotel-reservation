import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { confirmPayment } from '../functions/booking';
import {PayPalButton} from 'react-paypal-button-v2';
import axios from 'axios';

const CompletePayment=({history})=>{

    const [sdkReady,setSdkReady]=useState(false);
    const {booking}=useSelector((state)=>({...state}));
    
    const[price,setPrice]=useState();

    const dispatch=useDispatch();

    useEffect(() => {
        setPrice(booking.price);
        const addPayPalScript =async () => {
            try{
                await confirmPayment().then((res)=>{
                    const {data}=res;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
                     script.async = true;
                    script.onload = () => {
                        setSdkReady(true);
                    };
                    document.body.appendChild(script);
                });
            }catch(e){
                console.log(e);
            }
            
       }
        
        
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
          }
    }, [sdkReady]);

  const successPaymentHandler=()=>{
      console.log('success-payment')
     dispatch({
         type:'RESERVATION_COMPLETE',
         payload:{}
     })
     localStorage.removeItem('initial-booking')
     history.push('/');
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
                <PayPalButton amount={price} onSuccess={successPaymentHandler}></PayPalButton>
            </div>
        </div>
    )
}

export default CompletePayment;