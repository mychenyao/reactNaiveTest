import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    Image,
    Text,
    TextInput,
    View
  } from 'react-native';
  
export default class Order extends Component{
    constructor(props){
      super(props)
      this.state={
      }
    //   axios.get("https://app.dingdingkuaixiu.com/homedata").then(res=>{
    //       const data=res.data.result;
    //       this.setState({slideShow:data.slideShow})
    //       console.log(this.state)
    //   })
    }
    render() {
    
      return ( 
        <View>
            <View>
                <Text>Orderfdfdf12111111</Text>
            </View>
            <View style={styles.footer}>
            
            </View>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
    footer:{
        width:200,
        height:98/2,
        backgroundColor:"red"
    }
})

