import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import UpdateRegister from "../screens/UpdateRegister";
import HematologistConsult from "../screens/HematologistConsult";
import DentistConsult from "../screens/DentistConsult";
import PhysioterapistConsult from "../screens/PhysioterapistConsult";

import BleedInformRoutes from './BleedInformRoutes'
import DiaryUpdateRoutes from "./DiaryUpdateRoutes";

const Stack = createStackNavigator();

export default function AppRoutes() {
    return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UpdateRegister" component={UpdateRegister} />
        <Stack.Screen name="DiaryUpdate" component={DiaryUpdateRoutes} />
        <Stack.Screen name="BleedInform" component={BleedInformRoutes} />
        <Stack.Screen name="HematologistConsult" component={HematologistConsult} />
        <Stack.Screen name="DentistConsult" component={DentistConsult} />
        <Stack.Screen name="PhysioterapistConsult" component={PhysioterapistConsult} />
    </Stack.Navigator>
  </NavigationContainer>
}