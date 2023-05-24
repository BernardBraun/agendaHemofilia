import React from 'react';

import {Text, TextInput, StyleSheet, SafeAreaView, View, Button, Alert, NativeEventEmitter, TouchableOpacity} from 'react-native';

import ButtonComponent from './ButtonComponent';

export default function LoginData() {

    const clearField = () => {
        alert('Campo limpo');
    }

    const loginApp = () => {
        alert('Logando na aplicação');
    }

    const createAccount = () => {
        alert('Criando conta');
    }

    const linkGovBr = () => {
        alert('Redirecionando ao Gov.br');
    }

    return <SafeAreaView style={styles.view}>
        <Text style={styles.login}>Login:</Text>
        <TextInput inputMode='email' keyboardType='email-address' style={styles.field}/>
        <Text style={styles.password}>Senha:</Text>
        <TextInput textContentType='password' style={styles.field}/>
        <View style={styles.buttonContainerA}>
            <ButtonComponent labelButton="Limpar" onpress={clearField} />
            <ButtonComponent labelButton="Entrar" onpress={loginApp} />
        </View>
        <View style={styles.lineBreak} />
        <Text style={styles.newAccess}>Ainda não tem seu acesso?</Text>
        <View style={styles.buttonContainerB}>
            <ButtonComponent labelButton="Criar conta" onpress={createAccount} />
            <ButtonComponent labelButton="Entrar com gov.br" onpress={linkGovBr} />
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
        color: "#000000",
        fontWeight: "bold"
    },
    password: {
        fontSize: 18,
        color: "#000000",
        fontWeight: 'bold'
    },
    field: {
        borderWidth: 1,
        borderColor: "#EB0102",
        borderRadius: 6,
        color: "#000000",
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
        color: "#000000",
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
        justifyContent: "space-between",
        flexDirection: "row",
    },
    bottomText: {
        paddingTop: 100,
        color: "#000000",
        fontSize: 6
    }
})