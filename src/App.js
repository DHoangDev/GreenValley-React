import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';

import MainTemplate from './Pages/MainTemplate/MainTemplate';
import LoginTemPlate from './Pages/LoginTemplate/LoginTemplate';
import AdminTemplate from './Pages/AdminTemplate/AdminTemplate';
import Error from './Pages/Error/Error';

export const history = createBrowserHistory(); //{forceRefresh:true}
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <MainTemplate exact path="/" component={Home} />
            <MainTemplate exact path="/Home" component={Home} />
            <MainTemplate exact path="/Product" component={Product} />
          </Switch>
        </Router>
      </div>
    );
  }
}
