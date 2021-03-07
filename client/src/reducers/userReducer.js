let initialState={};

//load initial booking from localstorage
if(localStorage.getItem('user-state')){
    initialState=JSON.parse(localStorage.getItem('user-state'));
}

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOGGED_IN_USER":
            return action.payload;

        case "LOGOUT":
            return action.payload;
        
        default:
            return state;
    }
}