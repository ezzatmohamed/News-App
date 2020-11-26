
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/login/login'
import Signup from './components/signup/signup'
// import Headline from './components/headline/headline'
import Headlines from './components/headlines/headlines'
import Favorites from './components/favorites/favorites'
import Header from './components/header/header'
import { Provider } from 'react-redux'
import store from './redux/store'
a
function App() {
  return (
    <Router>

      <Provider store={store}>
        <div className="App">
          <Header></Header>
          <Switch>
              <Route path="/login" exact >
                <Login></Login>
              </Route>
              <Route path="/signup" exact >
                <Signup></Signup>
              </Route>


              <Route path="/favorites" exact >
                <Favorites></Favorites>
              </Route>
              <Route path="/headlines" exact >
                <Headlines></Headlines>
              </Route>

              <Route path="/" exact >
                <Headlines></Headlines>
              </Route>

          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
 