import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Os from "./Pages/Os";
import Documents from "./Pages/Documents";
import Users from "./Pages/Users";
import Dashboard from "./Pages/Dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Signin} exact path="/" />
        <Route component={Signup} path="/signup" />
        
        <Route component={Home} path="/home" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Os} path="/os" />
        <Route component={Documents} path="/documents" />
        <Route component={Users} path="/users" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
