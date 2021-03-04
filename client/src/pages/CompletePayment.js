import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { confirmPayment } from '../functions/booking';
import {PayPalButton} from 'react-paypal-button-v2';
import axios from 'axios';

const CompletePayment=()=>{

    const [sdkReady,setSdkReady]=useState(false);
    const {booking}=useSelector((state)=>({...state}));

    useEffect(() => {
        const addPayPalScript = async () => {
        confirmPayment().then((res)=>{
            const data=res.data;
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
            setSdkReady(true);
            };
            document.body.appendChild(script);
        });
       }
        
        
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
          }
    }, [sdkReady]);

  const successPaymentHandler=(paymentResult)=>{
     //
  }

      

    return(
        <div className="payment-grid paypal">
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
            </div>
            <div>
            <PayPalButton amount={100} onSuccess={successPaymentHandler}></PayPalButton>
            </div>
        </div>
    )
}

export default CompletePayment;