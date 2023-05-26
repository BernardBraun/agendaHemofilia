import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Login from "../screens/Login";
import Home from "../screens/Home";
import DiaryUpdate from "../screens/DiaryUpdate";

const Stack = createStackNavigator();

export default function AppRoutes() {
    return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DiaryUpdate" component={DiaryUpdate} />
    </Stack.Navigator>
  </NavigationContainer>
}