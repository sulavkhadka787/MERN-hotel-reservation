import axios from 'axios';

export const book=async(booking,authtoken)=>{
    return await axios.post(`${process.env.REACT_APP_API}/booking`,booking,{
        headers:{
            authtoken
        }
    })
};

