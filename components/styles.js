import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    containner:{
        flex:1,
        //justifyContent:'center',
        padding:24,
    },
    title:{
        fontSize:60,
        fontWeight:'bold',
    },
    warning:{
        color:'#d0f44f'
    },
    row:{
        padding:4,
        borderBottomColor:'red',
        borderBottomWidth:StyleSheet.hairlineWidth
    }
})

export default styles;