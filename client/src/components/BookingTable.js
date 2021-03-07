import React from 'react';
import StarRating from 'react-star-ratings';

const BookingTable=({reservations})=>{

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
                   <th>Ratings</th>
               </tr>
           </thead>
           {reservations.map((r)=>(
               <tbody>
               <tr>
                    <td>{r.checkInDate.split('T')[0]}</td>
                    <td>{r.checkOutDate.split('T')[0]}</td>
                    <td>{r.adults+r.children}</td>
                    <td>{r.roomType.roomType}</td>
                    <td>{r.roomType.price}</td>
                    <td><StarRating starDimension="15px" starSpacing="1px" rating={2.403}  starRatedColor="orange" /></td>
               </tr>
            </tbody>
            
            // <div>{console.log('rr',r)}======{Object.keys(r.roomType).map((rt)=><div>{rt}</div>)}========={Object.keys(r).map((inner)=>(
                
            //     <div>{console.log('innnr',inner)}+++++++{inner}</div>
            // ))}</div>
        ))}
           
           

       </table>
        </>
    )
}
export default BookingTable;