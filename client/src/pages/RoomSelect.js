import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import moment from 'moment';

import {roomSelect} from '../functions/booking';

const RoomSelect=({history})=>{
    const{user}=useSelector((state)=>({...state}));
    const {booking}=useSelector((state)=>({...state}));
    const {_id}=booking;
    const dispatch=useDispatch();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const startDate=  booking.checkInDate.split('T')[0];
            const endDate=  booking.checkOutDate.split('T')[0];
            let start=moment(startDate,'YYYY-MM-DD');
            let end=moment(endDate,'YYYY-MM-DD');
            let totalRoom=booking.room;
            const totalStay=moment.duration(end.diff(start)).asDays();
            const price=200*totalStay*totalRoom;
        
            const room=e.target.value;
            await roomSelect({roomType:room,price,bookingId:booking._id},user.token)
                .then((res)=>{console.log('roomresponse',res);
                toast.success('Your room has been confirmed');
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
                       roomType:res.data.roomType
                    }
                })
            localStorage.setItem('initial-booking',JSON.stringify(res.data));
            })
        }catch(e){
            toast.error(e);
        }
       history.push(`/payment/${_id}`);
    }


    return(

        <div>
            <div className="room-select">
                   <h3>Please Select Your Room</h3>
                   <div className="room-details">
                       <div><img className="room-select-img" src="/images/bedroom1.jpeg"/></div>
                       <div>Room, 1 King Bed with Sofa bed, Non Smoking</div>
                       <div>Price:$200/night</div>
                       <div><button value="deluxe"className="room-select-btn" onClick={handleSubmit}>Reserve</button></div>
                   </div>
                   <div className="room-details">
                       <div><img className="room-select-img" src="/images/bedroom2.jpeg"/></div>
                       <div>RSuite, 1 King Bed with Sofa bed, Non Smoking</div>
                       <div>Price:$200/night</div>
                       <div><button value="suite" className="room-select-btn" onClick={handleSubmit}>Reserve</button></div>
                   </div>
                   <div className="room-details">
                       <div><img className="room-select-img" src="/images/bedroom3.jpeg"/></div>
                       <div>RSuite, 2 Queen Beds , Non Smoking</div>
                       <div>Price:$200/night</div>
                       <div><button value="double-beds"className="room-select-btn" onClick={handleSubmit}>Reserve</button></div>
                   </div>
        
            </div>
            
        </div>
        
    )
}

export default RoomSelect;