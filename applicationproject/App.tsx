import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; 
import MenuScreen from './MenuScreen';
import AddDishScreen from './AddDishScreen';
import OrderScreen from './OrderScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator

        initialRouteName="HomeScreen" 
        screenOptions={{
          headerStyle: { backgroundColor: '#001f3e' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' }, }}>
       
        
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} /> 
        

        <Stack.Screen 
          name="MenuScreen" 
          component={MenuScreen} 
          options={{ headerShown: false }} />
       

        <Stack.Screen 
          name="AddDishScreen" 
          component={AddDishScreen} 
          options={{ headerShown: false }}  />
       

        <Stack.Screen 
          name="OrderScreen" 
          component={OrderScreen} 
          options={{ headerShown: false }}  />
       
      </Stack.Navigator>

      <StatusBar style="auto" />
      
    </NavigationContainer>
  );
}



