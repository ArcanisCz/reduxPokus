/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.less'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import * as Actions from "./actions/actions.js";

const store = configureStore();

store.dispatch(Actions.refreshTable());


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('app')
);
