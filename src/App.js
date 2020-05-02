import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Welcome from './components/Welcome';


class App extends Component {
  render() { 
    return (
      <Router>
        <Switch>
          <Route component={SignUp} path="/signup"></Route>
          <Route component={SignIn} path="/signin"></Route>
          <Route component={Welcome} path="/welcome"></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
