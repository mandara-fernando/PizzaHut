import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Customer/Main Pages/Home";
import NotFound from "../components/Customer/Main Pages/NotFound";
import Payment from "../components/Customer/Main Pages/Payment";
import login from "../components/Authentications/Login";
import SignUp from "../components/Authentications/SignUp";

function UserRoutes() {
  return (
    <>
      <Route path="/home" component={Home} />
      <Route path="/payment" component={Payment} />
      <Route path="/login" component={login} />
      <Route path="/signUp" component={SignUp} />
    </>
  );
}

export default UserRoutes;
