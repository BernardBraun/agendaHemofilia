import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Login from "../screens/Login";
import Home from "../screens/Home"

const Stack = createStackNavigator();

export default function AppRoutes() {
    return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
}