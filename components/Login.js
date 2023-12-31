import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const checkTextInput = () => {
    if (!name.trim()) {
      alert("Please Enter Name");
      return;
    } else if (!email.trim()) {
      alert("Please Enter Email");
      return;
    } else {
      alert("Success");
      return;
    }
  };

  <View style={styles.container}>
    <TextInput
      placeholder="Enter Name"
      style={styles.textInputStyle}
      value={name}
      onChangeText={(value) => {
        setName(value);
      }}
    />

    <Text>{"\n\n"}</Text>
    <TextInput
      placeholder="Enter Email"
      style={styles.textInputStyle}
      value={email}
      onChangeText={(value) => {
        setEmail(value);
      }}
    />

    <Text>{"\n\n"}</Text>
    <Button title="SUBMIT" onPress={checkTextInput} />
  </View>
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
