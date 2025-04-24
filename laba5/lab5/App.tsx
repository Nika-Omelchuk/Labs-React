import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LocationScreen from './components/LocationScreen';
import UserInputScreen from './components/UserInputScreen';
import HomeScreen from './components/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Items" component={HomeScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="Form" component={UserInputScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
