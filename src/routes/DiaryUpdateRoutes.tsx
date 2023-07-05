import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DiaryUpdate from '../screens/DiaryUpdate'
import DiaryLog from '../screens/DiaryLog'
import DiaryRegisterView from '../screens/DiaryRegisterView'

const Stack = createNativeStackNavigator();

export default function DiaryUpdateRoutes() {
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='DiaryUpdateScreen' component={DiaryUpdate} />
        <Stack.Screen name='DiaryLog' component={DiaryLog} />
        <Stack.Screen name='DiaryRegisterView' component={DiaryRegisterView} />
    </Stack.Navigator>
}