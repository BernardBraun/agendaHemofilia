import React from 'react';
import TopComponent from "./TopComponent"
import MenuComponent from "./MenuComponent"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export default function HomeScreen() {

    // AsyncStorage.getItem('token')
    //     .then((token) => {
    //         console.log('Token recuperado do AsyncStorage:', token);

    //     })
    //     .catch((error) => {
    //         Alert.alert('Erro ao recuperar o token do AsyncStorage:', error);
    //     });

    return <>
        <TopComponent />
        <MenuComponent />
    </>
}