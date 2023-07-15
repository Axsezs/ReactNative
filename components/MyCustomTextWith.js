import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({Fname, Lname}) => {
    return (
        <View>
            <Text>Your First Name is {Fname}! and Last name is {Lname}</Text>
        </View>
    )
}

const CustomText = () => {
  return (
    <View style ={{
        flex:1,   
        justifyContent:'center',    
        alignItems:'center'}}>

        <MyCustomTextWith Fname="Pitchakorn" Lname="Vichanuwat"/>
        <MyCustomTextWith Fname="Nathiga" Lname="Becheku"/>
    </View>
  )
}

export default CustomText