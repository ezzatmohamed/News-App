
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/login/login'
function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
            <Route path="/login" exact >
              <Login></Login>
            </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
 