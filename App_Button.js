import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
} from "react-native";
import React from "react";

const Seperator = () => <View style={styles.seperator} />;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press Me"
          color="#ff8f8f"
          onPress={() => alert("Simple Button pressed")}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="Press Me"
          color="#8cd594"
          onPress={() => alert("Simple Button pressed")}
        />
      </View>
      <Seperator />

      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Press Me"
          onPress={() => alert("Simple Button pressed")}
          disabled
        />
      </View>
      <Seperator />

      <View>
        <View>
          <Text style={styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
        </View>

        <View style={styles.fixToText}>
          <Button
            title="LEFT BUTTON"
            onPress={() => alert("LEFT BUTTON PRESS")}
          />
          <Button
            title="RIGHT BUTTON"
            onPress={() => alert("RIGHT BUTTON PRESS")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: "#474747",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
