import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "store";



import App from './components/App'
import Header from './components/Header/Header'

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss";
import "./assets/demo/demo.css";

import indexRoutes from "routes/index.jsx";
const hist = createBrowserHistory();


ReactDOM.render(
<Provider store={configureStore()}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </Router>
  </Provider>, document.querySelector('#root'));


