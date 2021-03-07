let initialState={};

//load initial booking from localstore
if(localStorage.getItem('mybookings')){
    initialState=JSON.parse(localStorage.getItem('mybookings'));
}

export const reservationReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'SHOW_MY_BOOKINGS':
            return action.payload;
        default:
            return state;
    }
}