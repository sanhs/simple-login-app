import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import Login from './components/Login';
import Home from './components/Home'

class App extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.user) this.props.user = nextProps.user;
  }

  render() {

    var Main = connect(mapStateToProps, {})(({ user }) => {
      console.log(user, 23423);
      if (!user || user.token.length <= 0) return <Login />
      else return (
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      );
    });



    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

App.proptypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state.app);
  return ({
    user: state.app.user,
  });
};

export default App;
