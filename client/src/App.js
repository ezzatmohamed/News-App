
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/login/login'
import Signup from './components/signup/signup'
function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
            <Route path="/login" exact >
              <Login></Login>
            </Route>
            <Route path="/signup" exact >
              <Signup></Signup>
            </Route>

            <Route path="/" exact >
              <Signup></Signup>
            </Route>

            <Route path="/favorites" exact >
              <Signup></Signup>
            </Route>

         </Switch>
      </div>
    </Router>
  );
}

export default App;
 