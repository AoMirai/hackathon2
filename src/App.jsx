import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Questions from './containers/Questions';
import Solution from './containers/Solution'
import logo from './LogoPtKamenoKo.PNG';
import { connect } from 'react-redux';
import './App.scss';

function App({route}) {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={route} component={Questions} />
        <Route path={route + '/solution'} component={Solution} />
      </Switch>
    </div>
  );
}

const mstp = state => ({
  route: state.router.route
});

export default connect(mstp)(App);
