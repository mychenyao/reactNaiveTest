import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight,
    Button,
    Text,
    TouchableOpacity,
    TextInput,
    View
  } from 'react-native';
  import SwiperItem from "./swiperItem"
  import Swiper from "react-native-swiper"
  import axios from "axios"
export default class HemeSeaver extends Component{
    constructor(props){
      super(props)
      this.state={
        slideShow:[]
      }
     
    }
   
    render() {
      return ( 
          <View>
            <SwiperItem/>
            
            <View style={styles.mumeBox}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("order")}><View style={styles.mumeContainer} ><Text style={styles.textStyle}>订单</Text></View></TouchableOpacity>
            
              <View style={styles.mumeContainer}></View>
              <View style={styles.mumeContainer}></View>
              <View style={styles.mumeContainer}></View>
            </View>
            <View style={styles.activity}>
              <View style={styles.leftContainer}>
                <Image style={styles.images} source={{uri:"https://image.dingdingkuaixiu.com/image/201806201829057854539.png"}}></Image>
              </View>
              <View style={styles.rightContainer}>
                <View style={styles.rightContainerTop}>
                </View>
                <View style={styles.rightContainerBottom}>
                </View>
              </View>
            </View>
          </View>
          // https://image.dingdingkuaixiu.com/image/201803302344091918006.png
      );
    }
  }
  const styles = StyleSheet.create({
    mumeBox: {
      marginTop:10,
      justifyContent:"space-around",
      flexDirection:'row',
      flexWrap:"wrap"
    },
    mumeContainer:{
      width:60,
      height:60,
      textAlign:"center",
      borderWidth:1,
      borderColor:'#00ff00',
      borderStyle:'dotted',
      borderRadius:60
    },
    images:{
      width:150,
      height:300,
    },
    activity:{
     marginTop:20,
     flex:1, 
     flexDirection:'row',
    },
    leftContainer:{
      width:150,
      height:300,
      marginLeft:10,
      marginRight:10,
    },
    rightContainer:{
      flex:1,
      flexDirection:'row',
    },
    rightContainerTop:{
      backgroundColor:"pink",
    },
    rightContainerBottom:{
      backgroundColor:"red",
    },
    textStyle:{
      flex:1,
      textAlign:'center', 
      lineHeight:55,
      // justifyContent:"center",
      // alignItems:"center",
    },
    wrapper:{
      
    },
  })