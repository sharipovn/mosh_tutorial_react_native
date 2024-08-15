import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <View
      style={{
        backgroundColor:"dodgerblue",
        width:100,
        height:100, 
        shadowColor:"red",//only for ios
        shadowOffset:{ width:50, height:50 },//only for ios
        shadowOpacity:1,//only for ios
        elevation:30,// for ios and android
      }}></View>
    </View>
  );
}


// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   }
// })