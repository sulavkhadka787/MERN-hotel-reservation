import {combineReducers} from "redux";
import {userReducer} from './userReducer';
import {bookingReducer} from './bookingReducer';

export const initialState={
    booking:{
        intitialBooking:localStorage.getItem('initial-booking') ? JSON.parse(localStorage.getItem('initial-booking')):null
    }
}
const rootReducer=combineReducers({
    user:userReducer,
    booking:bookingReducer
})

export default rootReducer;