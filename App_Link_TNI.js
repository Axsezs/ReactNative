import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import CustomSideBarMenu from "./pages/CustomSideBarMenu";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function FirstScreen() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
}

function SecondScreen() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="SecondPage" component={SecondPage} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#a2a2a2",
          width: 240,
        },
      }}

    drawerContent={(props)=><CustomSideBarMenu{...props}/>}
    >
      <Drawer.Screen name="FirstDrawer" component={FirstScreen} />
      <Drawer.Screen name="SecondDrawer Option" component={SecondScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
