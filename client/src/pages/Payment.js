import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import {bookingDetails} from '../functions/booking';

const Payment=({match})=>{

    const [booking, setBooking]=useState({});
    
    const {user}=useSelector((state)=>({...state}));

    const {id}=match.params;

    useEffect(()=>{
        console.log('_id',match);
        loadBookingDetails()
    },[id]);

    const loadBookingDetails=()=>{
        bookingDetails(id,user.token)
            .then((res)=>{
                setBooking(res.data);
            })
    }
    return(
        <div>{JSON.stringify(booking)}</div>
    )
}

export default Payment;