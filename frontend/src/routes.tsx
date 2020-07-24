import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Os from "./Pages/Os";
import Documents from "./Pages/Documents";
import Users from "./Pages/Users";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Info from "./Pages/Info";
import Identify from "./Pages/Identify";
import Recovery from "./Pages/Recovery";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Signin} exact path="/" />
        <Route component={Signup} path="/signup" />

        <Route component={Home} path="/home" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Os} exact path="/os" />
        <Route component={Documents} path="/documents" />
        <Route component={Users} path="/users" />
        <Route component={Profile} path="/profile" />
        <Route component={Info} path="/os/info" />
        <Route component={Identify} path="/identify" />
        <Route component={Recovery} path="/recovery" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
