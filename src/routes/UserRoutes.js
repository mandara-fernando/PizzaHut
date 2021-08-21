import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Customer/Main Pages/Home";
import NotFound from "../components/Customer/Main Pages/NotFound";
import login from "../components/Authentications/Login";
import SignUp from "../components/Authentications/SignUp";

function UserRoutes() {
  return (
    <>
      <Route path="/home" component={Home} />
      <Route path="/login" component={login} />
      <Route path="/signUp" component={SignUp} />
    </>
  );
}

export default UserRoutes;
