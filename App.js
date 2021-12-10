/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//components
import HomeScreen from './src/screens/HomeScreen';
import MovieScreen from './src/screens/MovieScreen';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Movie" 
        component={MovieScreen}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
};


export default App;
