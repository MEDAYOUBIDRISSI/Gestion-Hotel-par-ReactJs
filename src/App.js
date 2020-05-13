import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Contact from './components/Pages/Contact';
import Detail_espace from './components/Espace/Detail_espace';
import All_espace from './components/Espace/All_espace';
import Index from './components/Index';

class App extends Component {
  render() { 
    return (
      <Router>
        <Switch>
          <Route component={Detail_espace} path="/detail_espace"></Route>
          <Route component={All_espace} path="/all_espace"></Route>
          <Route component={SignUp} path="/signup"></Route>
          <Route component={SignIn} path="/signin"></Route>
          <Route component={Contact} path="/contact"></Route>
          <Route exact component={Index} path="/"></Route>
        </Switch>
      </Router>
    );
  } 
}
export default App;
