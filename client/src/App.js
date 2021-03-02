import React,{useEffect} from 'react';
import {Switch,Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import Home from "./pages/Home";
import Register from './pages/Register';
import RegisterComplete from './pages/RegisterComplete';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import RoomSelect from './pages/RoomSelect';
import Payment from './pages/Payment';

import {auth} from './firebase';
import {useDispatch} from 'react-redux';



const App=()=>{

  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(async (user)=>{
      if(user){
        const idTokenResult=await user.getIdTokenResult();
        //console.log('userrr',user);
        dispatch({
          type:"LOGGED_IN_USER",
          payload:{
            email:user.email,
            token:idTokenResult.token
          }
        })
      }
    });
    //cleanup
    return ()=>unsubscribe();
  },[]);

  return (
    <>
    <ToastContainer />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route exact path="/room/select/" component={RoomSelect} />
        <Route exact path="/payment/:id" component={Payment} />
    </Switch>
    </>
  );
}

export default App;
