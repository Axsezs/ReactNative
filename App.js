import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotOfGreeting from './components/LotOfGreeting';
import MyCustomTextWith from './components/MyCustomTextWith';

export default function App() {
  return (
    // <View style = {styles.container}>
    //   {/* <ViewBoxesWithColorAndText/>
    //   <DisplayandImage/> */}
    // </View>
    //<LotOfGreeting/>
    <MyCustomTextWith/>
  );
  
}
const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })

