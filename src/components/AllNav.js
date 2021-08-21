import AdminPanel from "./Administration/AdminPanel";
import Home from "./Customer/Main Pages/Home";
import Login from "./Authentications/Login";

function AllNav() {
  const role = "customer";
  if (role === "admin") {
    return <AdminPanel />;
  } else {
    return <Home />;
  }
}

export default AllNav;
