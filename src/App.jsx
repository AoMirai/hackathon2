import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Questions from './containers/Questions';
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
        <Route path='/questions/4' component={Questions} />
        <Route path='/biblio' component={Biblio} />
      </Switch>
    </div>
  );
}

const mstp = state => ({
  route: state.router.route
});

export default connect(mstp)(App);
