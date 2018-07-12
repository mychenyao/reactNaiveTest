
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
    View
  } from 'react-native';
import Swiper from "react-native-swiper"
import axios from "axios"
export default class SwiperItem extends Component{
    constructor(props){
      super(props)
      this.state={
        slideShow:[]
      }
      
    axios.get("https://app.dingdingkuaixiu.com/homedata").then(res=>{
        const data=res.data.result;
        this.setState({slideShow:data.slideShow})
    })
    }
    render() {
      return ( 
          <View style={styles.swiperItem}>
            <Swiper autoplay={true} loop={true} showsButtons={false}>
            {
              this.state.slideShow.map((v,i)=><View key={i} style={styles.slide1}>
                      <Image style={{height:326,width:Dimensions.get('window').width*2}} source={{"uri":v.image}}/>
                </View>)
            }
            </Swiper>
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    swiperItem:{
      height:326,
      width:Dimensions.get('window').width*2,
    },
    wrapper:{

    },
  })