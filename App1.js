import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotOfGreeting from './components/LotOfGreeting';
import MyCustomTextWith from './components/MyCustomTextWith';
import Counter from './components/Counter';
import MyInput from './components/MyInput';
import IncreamentCounter from './components/IncreamentCounter';
import Form from './components/Form';
import Login from './components/Login';
import Recap from './components/Recap';
import DefineStyle from './components/DefineStyle';
export default function App() {
  return (
    // <View style = {styles.container}>
    //   {/* <ViewBoxesWithColorAndText/>
    //   <DisplayandImage/> */}
    // </View>
    //<LotOfGreeting/>
    //<MyCustomTextWith/>

    <View style = {styles.container}>
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncreamentCounter/> */}
      {/* <Form/> */}
      {/* <Login/> */}
      {/* <Recap/> */}
      <DefineStyle/>
    </View>
  );
  
}
const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })

