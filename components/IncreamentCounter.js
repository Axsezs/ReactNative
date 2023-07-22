import { View, Text ,Button} from 'react-native'
import React , {useState} from 'react'

const IncreamentCounter = () => {
    const[age,setAge] = useState(23);
    const Increament = () => {
        setAge(a=>a+1);
    }


  return (
    <View>
        <Text style = {{fontSize:24,fontStyle:'bold'}}>
            Your age : {age}</Text>
            <Text>{'\n\n'}</Text>
            <Button
            title = '+3'
            onPress = {()=>{setAge(age+3)}}
            />
            <Text>{'\n\n'}</Text>
            <Button
            title = '+1'
            onPress = {()=>{Increament(age)}}
            />
    </View>
  )
}

export default IncreamentCounter