<<<<<<< Updated upstream
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homescreen.js';
import LoginScreen from './screens/loginScreen.js';
import Landing from './screens/landing.js';
import AddSahayak from './screens/addSahayak.js';
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< Updated upstream
        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
=======
      <Stack.Screen options={{headerShown : false}} name="Landing" component={Landing} />
      <Stack.Screen options={{headerShown : false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown : false}} name="Home" component={HomeScreen} /> 
      <Stack.Screen options={{headerShown : false}} name="AddSahayak" component={AddSahayak} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  )
}

