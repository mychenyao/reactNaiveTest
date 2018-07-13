/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs" 
import React, { Component } from 'react';
import {createMaterialTopTabNavigator,TabBarBottom,createStackNavigator,TabNavigator} from "react-navigation"
import {StyleSheet,View,PixelRatio,Dimensions,Image} from 'react-native';
import HemeSeaver from "./pages/Page"
import Order from "./pages/order"
import Wode from "./pages/wode"
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

const TabBars = createMaterialTopTabNavigator({
  Home: {
    screen: HemeSeaver,
    path: 'Home',
    navigationOptions:({navigation})=>({
      tabBarLabel:"首页",
      tabBarIcon:({focused,tintColor})=>(
        <View> <Image style={styles.imagesBar} source={require("./static/images/home.png")}/></View>
     
      )
    }),
  },
  order:{
    screen:Order,
    path:"order",
    navigationOptions:({navigation})=>({
      tabBarLabel:"订单",
      tabBarIcon:({focused,tintColor})=>(
      <Image source={require("./static/images/wode1.png")}/>
      )
    }),
  },
  wode:{
    screen:Wode,
    path:"wode",
    navigationOptions:({navigation})=>({
      tabBarLabel:"我的",
      tabBarIcon:({focused,tintColor})=>(
      <Image source={require("./static/images/wode1.png")}/>
      )
    }),
  },
},
 { 
    tabBarCompact:TabBarBottom, 
    tabBarVisible:false, 
    tabBarPosition:'bottom',
    swipeEnabled:false, 
    animationEnabled:false,
     lazy:true, 
     tabBarOptions:{ 
       activeTintColor:'#06c1ae', 
       inactiveTintColor:'#979797', 
       style:{
         backgroundColor:'#fff',
         width:win_width*2
      },
      labelStyle:{
         fontSize: 30,
         height:100,
         }
    //   // 文字大小 
    }, 
  },
)
let Route=createStackNavigator({
  appHome:TabBars
})
export default class App extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return ( 
      <View style={styles.box}>
        <Route/>
        {/* <Footer navigation={Route.navigation} /> */}
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
  },
  imagesBar:{
    width:40,
    height:40,
  }
})