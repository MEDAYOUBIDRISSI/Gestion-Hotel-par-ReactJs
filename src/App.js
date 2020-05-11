import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Welcome from './components/Welcome';
import Header from './components/Header/Header';


class App extends Component {
  render() { 
    return (
      <Router>
        <Switch>
          <Route component={SignUp} path="/signup"></Route>
          <Route component={SignIn} path="/signin"></Route>
          <Route component={Welcome} path="/welcome"></Route>
          <Route component={Header} path="/contact"></Route>
        </Switch>
      </Router>
    );
  } 
}
export default App;
