/**
 * @format
 */
import React, {Component} from 'react';

import App from './App';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import configureStore from './redux/configureStore';

const store = configureStore({
  isFetching: true,
  page: 1,
  tag: '',
  items: [],
});
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
