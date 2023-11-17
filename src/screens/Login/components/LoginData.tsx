import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView, View, Alert, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonComponent from './ButtonComponent';
import { URL_AUTH } from '../../../helper/baseUrl';

export default function LoginData() {

    const [formData, setFormData] = useState({
        login: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            login: value
        }))

    }

    const handlePassword = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            password: value
        }))
    }

    const clearField = () => {
        setFormData({
            login: '',
            password: ''
        });
        Alert.alert('Atenção', 'Campos limpos');
    }

    async function loginApp(formData) {

        const url = `${URL_AUTH}`;

        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro na requisição. Status code: ' + response.status);
                }
                return response.json()
            })
            .then(async (data) => {
                try {
                    await AsyncStorage.setItem('token', data.token);
                    await AsyncStorage.setItem('dataAccess', new Date().toString());
                    await AsyncStorage.setItem('userEmail', formData.login);
                } catch (error) {
                    Alert.alert("Erro", "Favor tente novamente mais tarde.")
                }

                return data;
            })

    }

    const handleLoginButtonPress = () => {
        setIsLoading(true);

        loginApp(formData)
            .then((data) => {
                setIsLoading(false);
                Alert.alert("Informação", "Sua sessão tem validade de 10 minutos.\nApós este tempo, sua sessão será encerrada automaticamente.")
                loginAccount.navigate('Home');
            })
            .catch((error) => {
                setIsLoading(false);
                Alert.alert('Erro no login', 'Verifique suas credenciais.');
            });
    };




    const loginAccount = useNavigation();
    const createAccount = useNavigation();

    return <SafeAreaView style={styles.view}>
        <Text style={styles.login}>Login:</Text>
        <TextInput
            inputMode='email'
            blurOnSubmit={true}
            keyboardType='email-address'
            style={styles.field}
            onChangeText={(value) => handleLogin(value)}
        />
        <Text style={styles.password}>Senha:</Text>
        <TextInput
            secureTextEntry={true}
            blurOnSubmit={true}
            textContentType='password'
            style={styles.field}
            onChangeText={(value) => handlePassword(value)}
        />
        <View style={styles.buttonContainerA}>
            <ButtonComponent labelButton="Limpar" onpress={() => {
                clearField();
            }} />
            <ButtonComponent labelButton="Entrar" onpress={() => {
                handleLoginButtonPress();
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
        <View>
            <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
        </View>
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
        paddingTop: 10,
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