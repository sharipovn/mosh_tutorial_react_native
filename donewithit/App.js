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
        <MaterialCommunityIcons name='email' size={60} color='red'/>
    </View>
  );
}

