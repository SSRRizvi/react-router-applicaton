import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Component/Home'; 
import Contact from './Component/Contact';
import About from './Component/about';
import Error from './Component/Error';
import Navigation from './Component/Navigation';
import DynamicParam from './Component/DynamicParam';


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation /> 
        <Switch>
          <Route path="/" component={Home}  exact /> 
          <Route path="/about" component={About}   /> 
          <Route path="/contact" component={Contact}   />
          <Route path="/dynamic/:route" component={DynamicParam} /> 
          <Route component={Error}   />   
        </Switch>
      </Router>

    );
  }
}

export default App;
