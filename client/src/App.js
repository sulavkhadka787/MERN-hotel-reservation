import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from './pages/Register';

const App=()=>{

  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
    </Switch>
  );
}

export default App;
