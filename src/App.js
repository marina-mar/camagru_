import React, { Component } from 'react';
/* my css */
import './App.css';
import Navbar from "./containers/Navbar";
import Account from "./containers/Account";
import Studio from "./containers/Studio";
import Gallery from "./containers/Gallery";
import SignUp from "./containers/SignUp";
import NotFound from "./containers/NotFound";
import {
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  render () {
    return (
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route path="/studio" component={Studio} />
            <Route path="/account" component={Account} />
            <Route path="/signup" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </div>
    );
  }
}
export default App;