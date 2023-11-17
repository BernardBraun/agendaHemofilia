import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Alert, StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from "./ButtonComponent"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkTokenValidity } from "../../../helper/tokenValidator";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MenuComponent() {
    const updateDiary = useNavigation();
    const updateRegister = useNavigation();
    const bleedInform = useNavigation();
    const hematologistConsult = useNavigation();
    const dentistConsult = useNavigation();
    const physioterapistConsult = useNavigation();
    const loginScreen = useNavigation();

    return <SafeAreaView style={styles.container}>

        <View style={styles.buttonContainerA}>
            <ButtonComponent
                iconName="search"
                labelButton="Localize seu Hemocentro"
                onPress={() => {
                    Alert.alert("Aviso", "Função em desenvolvimento")
                }} />
            <ButtonComponent
                iconName="syringe"
                labelButton="Meu diário"
                onPress={async () => {
                    updateDiary.navigate('DiaryUpdate')
                    var isValid = (await checkTokenValidity()).valid;
                    if (!isValid) {
                        loginScreen.navigate('Login')
                    }
                }}
            />
        </View>
        <View style={styles.buttonContainerA}>
            <ButtonComponent
                iconName="book"
                labelButton="Registro de Hemartrose"
                onPress={async () => {
                    updateDiary.navigate('BleedInform')
                    var isValid = (await checkTokenValidity()).valid;
                    if (!isValid) {
                        loginScreen.navigate('Login')
                    }
                }}
            />
            <ButtonComponent
                iconName="cloud-upload-alt"
                labelButton="Atualize seus dados"
                onPress={async () => {
                    updateDiary.navigate('UpdateRegister')
                    var isValid = (await checkTokenValidity()).valid;
                    if (!isValid) {
                        loginScreen.navigate('Login')
                    }
                }} />
            {/* <ButtonComponent labelButton="Inclua / Atualize consulta com o Hematologista" onpress={() => {
                hematologistConsult.navigate('HematologistConsult')
            }} />
            <ButtonComponent labelButton="Inclua / Atualize consulta com o Dentista" onpress={() => {
                dentistConsult.navigate('DentistConsult')
            }} />
            <ButtonComponent labelButton="Inclua / Atualize sessão de Fisioterapia" onpress={() => {
                physioterapistConsult.navigate('PhysioterapistConsult')
            }} /> */}
        </View>

        <View>
            <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#FFFFFF",
        
    },
    buttonContainerA: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    bottomText: {
        paddingTop: 180,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})