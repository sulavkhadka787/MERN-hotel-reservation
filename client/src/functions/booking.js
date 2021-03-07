import axios from 'axios';

export const book=async(booking,authtoken)=>{
    return await axios.post(`${process.env.REACT_APP_API}/booking`,booking,{
        headers:{
            authtoken
        }
    })
};

export const roomSelect=async(booking,authtoken)=>{
    return await axios.put(`${process.env.REACT_APP_API}/confirmRoom`,booking,{
        headers:{
            authtoken
        }
    })
};

export const bookingDetails=async(_id,authtoken)=>
    await axios.get(`${process.env.REACT_APP_API}/payment/${_id}`,{
        headers:{
            authtoken
        }
    });

// export const confirmPayment=async()=>
//     await axios.get(`${process.env.REACT_APP_API}/comfirm/payment`,{
//         headers:{
//             authtoken
//         }
//     })
export const confirmPayment=async()=>{
    const {data}=await axios.get(`${process.env.REACT_APP_API}/config/paypal`)};

export const mybookings=async(email,authtoken)=>
    await axios.post(`${process.env.REACT_APP_API}/mybookings/`,{email},{
        headers:{
            authtoken
        }
})