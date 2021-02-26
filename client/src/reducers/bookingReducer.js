
let initialState={};

//load initial booking from localstorage
if(localStorage.getItem('initial-booking')){
    initialState=JSON.parse(localStorage.getItem('initial-booking'));
}else{
    initialState={hello:'world'}
}

export const bookingReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'BEGIN_BOOKING':
            return action.payload;
        default:
            return state;
    }
}