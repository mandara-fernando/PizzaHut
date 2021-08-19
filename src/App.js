import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Customer/Main Pages/Home';
import login from './components/Authentications/login';
import signup from './components/Authentications/signup';
import Navbar from './Navbar';
import  { Overview, Employees, Employee_Reports } from './Pages/Overview';
import {Reports, ReportsOne, ReportsTwo, ReportsThree} from './Pages/Reports';
import Team from './Pages/Team';
import Sidebar from './components/Sidebar';
import AddEmployee from "./components/Administration/Employee Management/AddEmpolyee";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={login}/>
      <Route path="/signup" exact component={signup}/>
          <Route path="/add-employee" exact component={AddEmployee}/>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/overview/employees' exact component={Employees} />
        <Route path='/overview/employee-report' exact component={Employee_Reports} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
