import React from 'react';

import {Text, TextInput, StyleSheet, SafeAreaView, View, Button, Alert, NativeEventEmitter, TouchableOpacity} from 'react-native';

import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function LoginData() {

    const clearField = () => {
        alert('Campo limpo');
    }

    const loginNavigation = useNavigation();

    const loginApp = () => {
        fetch('https://api.adviceslip.com/advice')
          .then(response => response.json())
          .then(data => {
            Alert.alert("Alert",data.slip.advice);
          })
          .catch(error => {
            console.error(error);
          });
      }

    const createAccount = useNavigation();

    return <SafeAreaView style={styles.view}>
        <Text style={styles.login}>Login:</Text>
        <TextInput inputMode='email' blurOnSubmit={true} keyboardType='email-address' style={styles.field}/>
        <Text style={styles.password}>Senha:</Text>
        <TextInput secureTextEntry={true} blurOnSubmit={true} textContentType='password' style={styles.field}/>
        <View style={styles.buttonContainerA}>
            <ButtonComponent labelButton="Limpar" onpress={() => {
                loginApp();
            }} />
            <ButtonComponent labelButton="Entrar" onpress={() => {
                loginNavigation.navigate('Home');
            }
        
        } />
        </View>
        <View style={styles.lineBreak} />
        <Text style={styles.newAccess}>Ainda não tem seu acesso?</Text>
        <View style={styles.buttonContainerB}>
            <ButtonComponent labelButton="Crie sua conta aqui" onpress={() => {
                createAccount.navigate('Register');
                }} />
        </View>
        <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFFFFF",
        height: "100%",
        paddingHorizontal: 22
    },
    login: {
        fontSize: 18,
        color: "#EB0102",
        fontWeight: "bold"
    },
    password: {
        fontSize: 18,
        color: "#EB0102",
        fontWeight: 'bold'
    },
    field: {
        borderWidth: 1,
        borderColor: "#EB0102",
        borderRadius: 6,
        color: "#EB0102",
        paddingBottom: 10
    },
    lineBreak: {
        borderBottomColor: "#EB0102",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: 20,
    },
    spaceBetween: {
        paddingTop: 10
    },
    newAccess: {
        color: "#999999",
        fontSize: 16,
        marginVertical: 16,
        fontWeight: "bold"
    },
    buttonContainerA: {
        paddingTop:10,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    buttonContainerB: {
        flexDirection: "row",
    },
    bottomText: {
        paddingTop: 100,
        color: "#000000",
        fontSize: 6
    }
})