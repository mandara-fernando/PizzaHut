import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import login from './components/login';
import signup from './components/signup';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={login}/>
      <Route path="/signup" exact component={signup}/>
      
      </div>
    </Router>
  );
}

export default App;
