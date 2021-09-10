import React from "react";
import { Route, Switch } from "react-router-dom";
import AddEmployee from "../components/Administration/Employee Management/AddEmployee";
import AdminPanel from "../components/Administration/AdminPanel";
import Delivery from "../components/Administration/Delivery Management/Delivery";
import Dashboard from "../components/Administration/Dashboard/Dashboard";
import ViewEmployee from "../components/Administration/Employee Management/ViewEmployee";
import UpdateEmployee from "../components/Administration/Employee Management/UpdateEmployee.";
import UpdateProduct from "../components/Administration/Product Management/UpdateProduct";
import AddProduct from "../components/Administration/Product Management/AddProduct";
import ViewProducts from "../components/Administration/Product Management/ViewProducts";
import Orders from "../components/Administration/Order Management/Orders";
import ViewOrder from "../components/Administration/Order Management/ViewOrder";
import AddPromotion from "../components/Administration/Promo  Management/AddPromotion";
import UpdatePromotion from "../components/Administration/Promo  Management/UpdatePromotion";
import ViewPromotions from "../components/Administration/Promo  Management/ViewPromotions";
import ViewUsers from "../components/Administration/User Management/ViewUsers";
import AddUser from "../components/Administration/User Management/AddUser";
import UpdateUser from "../components/Administration/User Management/UpdateUser";
import Payments from "../components/Administration/Payment Management/Payments";

function AdminRoutes(props) {
  return (
    <>
      <Route path="/admin/delivery" component={Delivery} />

      <Route path="/admin/dashboard" component={Dashboard} />

      <Route path="/admin/payments" component={Payments} />

      <Route path="/admin/view-order" component={ViewOrder} />
      <Route path="/admin/orders" component={Orders} />

      <Route path="/admin/add-employee" component={AddEmployee} />
      <Route path="/admin/view-employees" component={ViewEmployee} />
      <Route path="/admin/update-employee" component={UpdateEmployee} />

      <Route path="/admin/add-user" component={AddUser} />
      <Route path="/admin/view-users" component={ViewUsers} />
      <Route path="/admin/update-user" component={UpdateUser} />

      <Route path="/admin/add-product" component={AddProduct} />
      <Route path="/admin/view-products" component={ViewProducts} />
      <Route path="/admin/update-product" component={UpdateProduct} />

      <Route path="/admin/add-promo" component={AddPromotion} />
      <Route path="/admin/view-promos" component={ViewPromotions} />
      <Route path="/admin/update-promo" component={UpdatePromotion} />
    </>
  );
}

export default AdminRoutes;
