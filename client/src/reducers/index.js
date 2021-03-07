import {combineReducers} from "redux";
import {userReducer} from './userReducer';
import {bookingReducer} from './bookingReducer';
import { reservationReducer } from "./resReducer";


const rootReducer=combineReducers({
    user:userReducer,
    booking:bookingReducer,
    res:reservationReducer
})

export default rootReducer;