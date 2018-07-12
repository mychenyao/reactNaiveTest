/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs" 
import React, { Component } from 'react';
import {StackNavigator,createStackNavigator} from "react-navigation"
import {StyleSheet,View,PixelRatio,Dimensions} from 'react-native';
import HemeSeaver from "./pages/Page"
import Order from "./pages/order"
import Footer from "./pages/footer"
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
let designSize = {width:750,height:1336};
 
let pxRatio = PixelRatio.get();
let win_width = Dimensions.get("window").width
let win_height = Dimensions.get("window").height
 
let width = pt2px(win_width);
let height = pt2px(win_height);
 
let design_scale = designSize.width/width;
height = height*design_scale
 
let scale = 1/pxRatio/design_scale;
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
    // console.log(createMaterialBottomTabNavigator)
  }
  render() {
    return ( 
      <View style={styles.box}>
        <Route/>
        <Footer navigation={Route.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box:{
    width:width,
        height:height,
        position:"relative",
        backgroundColor: 'transparent',
        transform:[{translateX:-width*.5},
                    {translateY:-height*.5},
                    {scale:scale},
                    {translateX:width*.5},
                    {translateY:height*.5}]
  }
})