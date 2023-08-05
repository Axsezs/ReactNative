import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TouchablePratice from "./components/TouchablePratice";

const App = () => {
  return (
    <View style={styles.container}>
      <TouchablePratice />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
