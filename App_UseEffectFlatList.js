import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UseEffectFlatList from "./components/UseEffectFlatList";

const App = () => {
  return (
    <View style={styles.container}>
      <UseEffectFlatList/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
