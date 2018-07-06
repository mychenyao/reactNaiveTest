/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator,createStackNavigator} from "react-navigation"
import {StyleSheet} from 'react-native';
import HemeSeaver from "./pages/Page"
import Order from "./pages/order"
let Route=createStackNavigator({
  Home: {
    screen: HemeSeaver,
    path: 'Home',
    navigationOptions:{
      title:"首页",
      headerStyle:{
        backgroundColor:'#00a0e9'
    },
    headerBackTitleStyle:{
      color:'#666666',
    },
      headerTintColor:'white',
    },
   
  },
  order:{
    screen:Order,
    path:"order",
    navigationOptions:{
      title:"订单"
    }
  }
})

export default class App extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return ( 
      <Route></Route>
    );
  }
}
