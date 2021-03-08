import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import StarRating from 'react-star-ratings';
import {toast} from 'react-toastify';
import {bookingStar} from '../functions/booking';

const BookingTable=({reservations,res,onStarClick})=>{

    return(
        <>
        <table>
           <thead>
               <tr>
                   <th>Check-In</th>
                   <th>Check-out</th>
                   <th>Total Guest</th>
                   <th>Room Type</th>
                   <th>Price</th>
                   <th>test ratings</th>
                   <th>Ratings</th>
               </tr>
           </thead>
          
               <tbody>
               {reservations.map((r)=>(
               <tr key={r._id}>
                    <td>{r.checkInDate.split('T')[0]}</td>
                    <td>{r.checkOutDate.split('T')[0]}</td>
                    <td>{r.adults+r.children}</td>
                    <td>{r.roomType.roomType}</td>
                    <td>{r.roomType.price}</td>
                    <td>{r.ratings ? r.ratings.star : 0}</td>
                    <td>
                        <div>
                        
                            <StarRating 
                            name={r._id} 
                            starDimension="20px" 
                            starSpacing="1px" 
                            rating={r.ratings ? r.ratings.star : 0}
                            starRatedColor="orange"
                            // changeRating={(newRating,name)=>console.log('newRating',newRating,"name",name)}
                            changeRating={onStarClick}
                            isSelectable={true}
                        />
                        </div>
                        </td>
               </tr>
            
        ))}
           
           
        </tbody>
       </table>
        </>
    )
}
export default BookingTable;