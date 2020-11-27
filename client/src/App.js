
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
import Message from './components/message/message'
import {AuthRoute,NotAuthRoute} from './protected.route'


function App() {

  return (
    <Router >

      <Provider store={store}>
        <div className="App">
          {/* <Header></Header> */}
          <Route path='/' component={Header}/>
          <Switch>
              <NotAuthRoute path="/login" exact component={Login}/>
              <NotAuthRoute path="/signup" exact component={Signup}/>


              <AuthRoute path="/favorites" exact component={Favorites}/>
              <AuthRoute path="/headlines" exact component={Headlines}/>
              <AuthRoute path="/" exact component={Headlines}/>
 
          </Switch>
            <Message ></Message> 
        </div>
      </Provider>
    </Router>
  );
}

export default App;
 