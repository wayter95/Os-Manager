import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Os from "./Pages/Os";
import Documents from "./Pages/Documents";
import Reports from "./Pages/Reports";
import Users from "./Pages/Users";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Signin} exact path="/" />
        <Route component={Signup} path="/signup" />
        
        <Route component={Home} path="/home" />
        <Route component={Os} path="/os" />
        <Route component={Documents} path="/documents" />
        <Route component={Reports} path="/reports" />
        <Route component={Users} path="/users" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
