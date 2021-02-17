import React from 'react';
import {Switch,Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import Home from "./pages/Home";
import Register from './pages/Register';
import RegisterComplete from './pages/RegisterComplete';



const App=()=>{

  return (
    <>
    <ToastContainer />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
    </Switch>
    </>
  );
}

export default App;
