import AdminPanel from "./Administration/AdminPanel";
import Home from "./Customer/Main Pages/Home";
import Login from "./Authentications/Login";
import CustomerDashboard from "./Customer/CustomerDashboard";

function AllNav() {
  const role = localStorage.getItem("user");

  if ("Admin" === "Admin") {
    return <AdminPanel />;
  } else {
    return <CustomerDashboard />;
  }
}

export default AllNav;
