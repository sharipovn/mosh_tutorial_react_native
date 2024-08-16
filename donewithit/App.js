import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';

import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function App() {
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text
        style={{
          fontSize:30,
          fontFamily: 'system',
          fontStyle: 'italic',
          fontWeight:'bold',
          color:'tomato',
          textTransform:'capitalize',
          // textDecorationLine:'line-through'
          textAlign: 'center',
          lineHeight:25 //boshqa componenetalaga bunaqa style berib bo'lmaydi
        }}
        >
          I love React Native! This is my first React Native APP
        </Text>
        <AppText>sssss</AppText>
    </View>
  );
}

