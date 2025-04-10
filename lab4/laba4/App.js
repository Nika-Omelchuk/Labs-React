import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen.tsx";
import DetailsScreen from "./components/DetailsScreen.tsx";
import ProfileScreen from "./components/ProfileScreen.tsx";

const Stack = createNativeStackNavigator();

function DetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route?.params?.title ?? "Details Page",
          headerRight: () => (
            <Button title="Info" onPress={() => alert("More info")} />
          ),
        })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={DetailsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebd2fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});