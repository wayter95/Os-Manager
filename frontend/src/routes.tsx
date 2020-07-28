import React from "react";
import { Route, BrowserRouter, Switch, Redirect, RouteProps as ReactDOMRouteProps } from "react-router-dom";

import { useAuth } from './services/auth';

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

interface RouteProps extends ReactDOMRouteProps {
  isAdmin?: boolean;
  component: React.ComponentType;
}

const PrivateRoute: React.FC<RouteProps> = ({
  isAdmin = false,
  component: Component,
  ...rest
}) => {
  const {user} = useAuth();
  const isSigned = !!user;

  return (
    <Route 
    {...rest}
    render={() => {
      return !isAdmin ? (
        <Component />
      ):(
        <>
        {
          isSigned ? (
            <Component />
          ):  (
            <Redirect to="/"/>
          )
        }
        </>
      )
    }}
    />
  )
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Signin} exact path="/" />
        <Route component={Signup} path="/signup" />

        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute isAdmin component={Dashboard} path="/dashboard" />
        <PrivateRoute component={Os} exact path="/os" />
        <PrivateRoute isAdmin component={Documents} path="/documents" />
        <PrivateRoute isAdmin component={Users} path="/users" />
        <PrivateRoute component={Profile} path="/profile" />
        <PrivateRoute isAdmin component={Info} path="/os/info" />

        <Route component={Identify} path="/identify" />
        <Route component={Recovery} path="/recovery" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
