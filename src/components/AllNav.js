import AdminPanel from "./Administration/AdminPanel";
import Home from "./Customer/Main Pages/Home";
import Login from "./Authentications/Login";

function AllNav() {
  const role = "admin";
  if (role === "admin") {
    return <AdminPanel />;
  } else if (role === "customer") {
    return <Home />;
  } else {
    return <signup />;
  }
}

export default AllNav;
