import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path="/login" render={() => <Login />}/>
              <Route path="/" component={Login}/>
          </Switch>
      </div>
    );
  }
}

export default App;
