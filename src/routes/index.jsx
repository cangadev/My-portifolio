import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../Pages/HomePage";
import NotFound from "../Pages/404";

function Routes() { 
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Home} />
    
      <Route path="*" component={NotFound} />
    </Switch>
</BrowserRouter>
  );
}

export default Routes;
