/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {
  View,
} from 'react-native';

import RouterComponent from './Router';
import reducers from './recuders';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCpxqh74vcYsa81hnO5YS3HCDEXeGCnTKQ',
      authDomain: 'manager-d27cd.firebaseapp.com',
      databaseURL: 'https://manager-d27cd.firebaseio.com',
      projectId: 'manager-d27cd',
      storageBucket: 'manager-d27cd.appspot.com',
      messagingSenderId: '664068774569'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1 }}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}
