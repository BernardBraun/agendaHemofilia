import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import BleedInformScreen from '../screens/BleedInform'
import BleedInformLog from '../screens/BleedInformLog'
import BleedInformRegisterView from '../screens/BleedInformRegisterView'

const Stack = createNativeStackNavigator();

export default function DiaryUpdateRoutes() {
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='BleedInformScreen' component={BleedInformScreen} />
        <Stack.Screen name='BleedInformLog' component={BleedInformLog} />
        <Stack.Screen name='BleedInformRegisterView' component={BleedInformRegisterView} />
    </Stack.Navigator>
}