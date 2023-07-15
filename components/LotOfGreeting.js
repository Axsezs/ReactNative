import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props)=>{
    return(
        <View>
          <Text>Hello {props.name}</Text>
        </View>
    )
}
const LotOfGreeting = () => {
  return (
    <View style = {{alignItems:'center',top:50}}>
        <Greeting name = "Marry Christmas"/>
        <Greeting name = "Happy New Year"/>
        <Greeting name = "Happy Songkran Festival"/>
    </View>
  )
}

export default LotOfGreeting