import React, { Component } from 'react';

import {

    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    PixelRatio,Dimensions,
    View
  } from 'react-native';

// 尺寸适配start
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
let designSize = {width:750,height:1336};
let win_width = Dimensions.get("window").width
let win_height = Dimensions.get("window").height
let width = pt2px(win_width);
let height = pt2px(win_height);
let design_scale = designSize.width/width;
height = height*design_scale
// 尺寸适配end
export default class Footer extends Component{
    constructor(props){
      super(props)
      this.state={
        slideShow:[]
      }
    }
    navigPush(){
     this.props.navigation.navigate("order")
    }
    render() {
      return ( 
            <View style={styles.app}>
                <View style={styles.items}>
                    <Image style={styles.itemsIcon} source={require("../static/images/home2.png")}></Image>
                    <Text style={styles.text}>首页</Text>
                </View>
                <TouchableOpacity onPress={()=>this.navigPush()}>
                  <View style={styles.items}>
                      <Image  style={styles.itemsIcon} source={require("../static/images/home.png")}></Image>
                      <Text style={styles.text}>订单</Text>
                  </View>
                </TouchableOpacity>
                <View  style={styles.items}>
                    <Image style={styles.itemsIcon} source={require("../static/images/home.png")}></Image>
                    <Text style={styles.text}>我的</Text>
                </View>
            </View>
      );
    }
  }
  const styles = StyleSheet.create({
    app:{
        height:98,
        width:750,
        position:"absolute",
        bottom:44,
        flexDirection:'row',
        justifyContent:"space-around",
        borderStyle:'solid',
        borderColor:"#ccc",
        borderTopWidth:1,
    },
    text:{
      fontSize:24,
      lineHeight:44,
    },
    items:{
      justifyContent:"center",
    },
    itemsIcon:{
      width:40,
      height:40,
    }
  })