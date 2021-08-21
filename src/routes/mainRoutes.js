import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import NotFound from "../components/Customer/Main Pages/NotFound";
import AdminRoutes from "./AdminRoutes";

function MainRoutes() {
  return (
    <div>
      {/*<Router>*/}
      {/*  <UserRoutes />*/}
      {/*  <AdminRoutes />*/}
      {/*  <Route path="/not-found" component={NotFound} />*/}
      {/*</Router>*/}
    </div>
  );
}

export default MainRoutes;
