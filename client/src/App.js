import React,{useEffect} from 'react';
import {Switch,Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import Home from "./pages/Home";
import Register from './pages/Register';
import RegisterComplete from './pages/RegisterComplete';
import Login from './pages/Login';

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
    </Switch>
    </>
  );
}

export default App;
