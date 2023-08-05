import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View 
    style={[
      styles.container,{flexDirection:'column'}
    ]}>
      {/* <View style = {{flex:1,backgroundColor:'#7dff78'}}/>
      <View style = {{flex:2,backgroundColor:'#ff9898'}}/>
      <View style = {{flex:3,backgroundColor:'#ffcb42'}}/> */}

      <View style = {{flex:1,backgroundColor:'#bdffcf'}}/>
      <View style = {{flex:1,backgroundColor:'#60ff8a'}}/>
      <View style = {{flex:1,backgroundColor:'#09f500'}}/>
      

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,  
 }
})