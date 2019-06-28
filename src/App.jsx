import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Questions from './containers/Questions';
import Solution from './containers/Solution'
import Result from './containers/Result'
import logo from './LogoPtKamenoKo.PNG';
import { connect } from 'react-redux';
import './App.scss';
import Biblio from './containers/Biblio';

function App({route}) {
  return (
    <div className="App">
        <div>
      <img src={logo} className="App-logo" alt="logo" />
        </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={'/result'} component={Result} />
        <Route exact path={route} component={Questions} />
        <Route path='/biblio' component={Biblio} />
        <Route path={route + '/solution'} component={Solution} />
      </Switch>
    </div>
  );
}

const mstp = state => ({
  route: state.router.route
});

export default connect(mstp)(App);
