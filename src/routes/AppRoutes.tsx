import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Login from "../screens/Login";
import Home from "../screens/Home";
import DiaryUpdate from "../screens/DiaryUpdate";
import DiaryLog from "../screens/DiaryLog";
import DiaryRegisterView from "../screens/DiaryRegisterView";
import Register from "../screens/Register";
import BleedInform from "../screens/BleedInform";
import BleedInformLog from "../screens/BleedInformLog";
import BleedInformRegisterView from "../screens/BleedInformRegisterView";

const Stack = createStackNavigator();

export default function AppRoutes() {
    return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BleedInformRegisterView" component={BleedInformRegisterView} />
    </Stack.Navigator>
  </NavigationContainer>
}