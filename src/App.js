import "./App.css";
import axios from "axios";
import MainRoutes from "./routes/mainRoutes";
import AllNav from "./components/AllNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminSideBar from "./components/Administration/Admin Navigation/AdminSideBar";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

axios.defaults.withCredentials= true;

function App() {
  

  return (
    <div>
      <Router>
        <AllNav />
        <Switch>
          <UserRoutes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
