import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.darkBubble}></View>
      <View style={styles.lightBubble}></View>
       <StatusBar  backgroundColor={"#9BABB8"} />
      <View style={styles.loginContainer}>
        <TextInput style={styles.TextInput} placeholder='Email' placeholderTextColor={'#EEE3CB'}/>
        <TextInput style={styles.TextInput} placeholder='Password' placeholderTextColor={'#EEE3CB'}/>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.darkBubbleReverse}></View>
      <View style={styles.lightBubbleReverse}></View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: "#9BABB8",
    justifyContent:'center',
    alignItems:'center'
  },
  loginContainer:{
    width:'80%',
    justifyContent:'center',
    alignItems:'center'
  },
  TextInput:{
    height: 50,
    width:'100%',
    marginVertical:25,
    borderRadius: 10,
    borderWidth:1,
    paddingHorizontal:10,
    borderColor: "#EEE3CB",
    color: '#EEE3CB',
    fontSize:16
  },
  loginButton:{
    backgroundColor: '#EEE3CB',
    height: 50,
    width:'50%',
    marginVertical:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },
  loginText:{
    color: '#967E76',
    fontSize:18,
    fontWeight: 'bold'
  },
  darkBubble:{
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor:'#967E76',
    position:'absolute',
    top:-100,
    left:0
  },
  lightBubble:{
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor: "rgba(238, 227, 203, 0.5)",
    position:'absolute',
    top:0,
    left:-100
  },
  darkBubbleReverse:{
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor:'#967E76',
    position:'absolute',
    bottom:-100,
    right:0
  },
  lightBubbleReverse:{
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor: "rgba(238, 227, 203, 0.5)",
    position:'absolute',
    bottom:0,
    right:-100
  }
})