import AdminPanel from "./Administration/AdminPanel";
import Home from "./Customer/Main Pages/Home";
import Login from "./Authentications/Login";

function AllNav() {

  const role =  localStorage.getItem("user");

  if (role === "Admin") {
    return <AdminPanel />;
  } else {
    return <Home />;
  }
}

export default AllNav;
