import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer/presenter';
import reducer from './reducer';
import { createStore } from 'redux'; //After exported reducer, create the Store
import { Provider } from 'react-redux'; // For copy to our component

let store = createStore(reducer);
console.log(store.getState());

export default class App extends Component {
  render() {
    return ( //Provider have a prop name is "store"
      <Provider store= {store}> 
        <Timer />
      </Provider>
    )
  }
}