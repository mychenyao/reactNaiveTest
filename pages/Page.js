import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ScrollView,
    Image,
    TouchableHighlight,
    Button,
    Text,
    TouchableOpacity,
    TextInput,
    PixelRatio,
    Dimensions,
    View
  } from 'react-native';
  import SwiperItem from "./swiperItem"
  import axios from "axios"
// 尺寸适配start
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
// 尺寸适配end
export default class HemeSeaver extends Component{
    constructor(props){
      super(props)
      this.state={
        slideShow:[]
      }
     
    }
    render() {
    
      return ( 
        // <ScrollView>
          <View style={styles.app}>
            <SwiperItem/>
            <View style={styles.mumeBox}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("order")}>
              <View style={styles.mumeContainer}>
                <Image style={styles.mumeItemImage} source={require('../static/images/mobile_phone.png')}></Image>
                <Text style={styles.mumeFontSize}>手机维修</Text>
              </View>
              </TouchableOpacity>
              <View style={styles.mumeContainer}>
                <Image style={styles.mumeItemImage} source={require('../static/images/household.png')}></Image>
                <Text style={styles.mumeFontSize}>家电维修</Text>
              </View>
              <View style={styles.mumeContainer}><Image style={styles.mumeItemImage} source={require('../static/images/purge.png')}></Image>
              <Text style={styles.mumeFontSize}>家电清洗</Text>
              </View>
              <View style={styles.mumeContainer}><Image style={styles.mumeItemImage} source={require('../static/images/pipeline.png')}></Image>
              <Text style={styles.mumeFontSize}>卫浴洁具</Text>
              </View>
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
          // </ScrollView>
          // https://image.dingdingkuaixiu.com/image/201803302344091918006.png
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      width:width,
      height:height,
      position:"relative",
      transform:[{translateX:-width*.5},
                  {translateY:-height*.5},
                  {scale:scale},
                  {translateX:width*.5},
                  {translateY:height*.5}]
  },
    mumeBox: {
      marginTop:10,
      justifyContent:"space-around",
      flexDirection:'row',
      width:win_width*1.8,
      flexWrap:"wrap"
    },
    mumeItemImage:{
      width:120,
      height:120,
    },
    mumeContainer:{
      width:120,
      // height:180
    },
    images:{
      width:286,
      height:461,
    },
    activity:{
     marginTop:20,
     flex:1, 
     overflow:"hidden",
     flexDirection:'row',
    },
    leftContainer:{
      width:286,
      height:461,
      marginLeft:10,
      marginRight:10,
    },
    rightContainer:{
      flex:1,
      flexDirection:'row',
    },
    rightContainerTop:{
      backgroundColor:"pink",
      width:421,
      
      height:224,
    },
    rightContainerBottom:{
      backgroundColor:"red",
      width:421,
      height:224,
    },
    textStyle:{
      flex:1,
      textAlign:'center', 
      lineHeight:55,
      // justifyContent:"center",
      // alignItems:"center",
    },
    mumeFontSize: {
      fontSize:28,
      textAlign:"center",
      lineHeight:48,
      color:"#000",
    },
    app:{
    //  width:width,
    //     height:height,
    //     position:"relative",
    //     backgroundColor: 'transparent',
    //     transform:[{translateX:-width*.5},
    //                 {translateY:-height*.5},
    //                 {scale:scale},
    //                 {translateX:width*.5},
    //                 {translateY:height*.5}]
    },
    wrapper:{
      
    },
  })