import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {mybookings} from '../functions/booking.js';
import BookingTable from '../components/BookingTable';


const MyBookings=()=>{

    const[reservations,setReservations]=useState([]);
    const[loading,setLoading]=useState(false);

    const {user}=useSelector((state)=>({...state}));

    useEffect(()=>{
            
        setLoading(true);
        loadbookings();
        console.log('reser',reservations);
        setLoading(false);
        
    },[loading])

    

    const loadbookings=()=>{
        if(user && user.token){
            console.log('usreremailif');
            mybookings(user.email,user.token).then((res)=>{
                console.log('ress=>',res);
                setReservations(res.data);
            });
        }else{
            console.log('iferror');
        }
        }

return(
    <div>
        <h3>Booking History for: {user.email}</h3>
       <BookingTable reservations={reservations}/>
        
    </div>
    

)
}
export default MyBookings;