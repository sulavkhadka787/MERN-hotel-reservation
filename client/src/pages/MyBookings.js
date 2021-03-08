import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {mybookings} from '../functions/booking.js';
import BookingTable from '../components/BookingTable';
import {bookingStar} from '../functions/booking';
import {toast} from 'react-toastify';


const MyBookings=()=>{

    const[reservations,setReservations]=useState([]);
    const [star,setStar]=useState(0);

    const {user}=useSelector((state)=>({...state}));
    const {res}=useSelector((state)=>({...state}))
    const dispatch=useDispatch();

    useEffect(()=>{
            
        loadbookings();
        console.log('reser',reservations);

    },[star])

    

    const loadbookings=()=>{
        if(user && user.token){
            console.log('usreremailif');
            mybookings(user.email,user.token).then((res)=>{
                console.log('ress=>',res);
                setReservations(res.data);
                dispatch({
                    type:'SHOW_MY_BOOKINGS',
                    payload:res.data
                })
            });
        }else{
            console.log('iferror');
        }
     
    }

    const onStarClick=(newRating,name)=>{
        
        console.table(newRating,name);
        bookingStar(name,newRating,user.token)
          .then(res=>{
              console.log('rating clicked',res.data);
              toast.success('Rating updated')
              setStar(newRating)
          })
          loadbookings();
    }

   

return(
    <div>
    
        {JSON.stringify(star)}
        <h3>Booking History for: {user.email}</h3>
       <BookingTable  reservations={reservations} res={res} onStarClick={onStarClick}/>
        
    </div>
    

)
}
export default MyBookings;