import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import AppText from './app/components/AppText';
import Card from './app/components/Card'

import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import MessagesScreen from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <MessagesScreen/>
    </GestureHandlerRootView>
  )
}

