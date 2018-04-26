import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import '../App.css';
import Home from '../containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App d-flex justify-content-md-center flex-column">
        <Router>
          <Switch>
            <Route path="/:artist?/:song?" component={Home}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;