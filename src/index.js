/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {createHistory} from 'history';
import {Router, useRouterHistory} from 'react-router';

import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.less'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Immutable from "immutable";

const deserializeState = (state) => {
  const ret = {};
  for (let key in state) {
    ret[key] = Immutable.fromJS(state[key]);
  }
  return ret;
};

const store = configureStore(localStorage.getItem('reduxState') ? deserializeState(JSON.parse(localStorage.getItem('reduxState'))) : {});

const browserHistory = useRouterHistory(createHistory)({
  basename: process.env.NODE_ENV === 'production' ? '/bu' : "/"
});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
);
