import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React,{useState} from "react";

const Recap = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

const showText =()=>{
    alert("Email :"+(email)+ "\n"+"Password:" +(pass))
    return
}
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          value={pass}
          onChangeText={(value) => {
            setPass(value);
          }}
        />
        <Text>{"\n\n"}</Text>
        <Button style ={styles.submitButton}
        title="SUBMIT" onPress={showText} />
      </View>
    );
  };

export default Recap;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
   margin: 15,
   height: 40,
   borderColor: '#7a42f4',
   borderWidth:1,
  },
  submitButton:{
    backgroundColor:'#7a42f4',
    padding:10,
    margin:15,
    height:40,
  },
  submitButtonText:{
    color:'white'
  }
});
