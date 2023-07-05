import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Alert, StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from "./ButtonComponent"

export default function MenuComponent() {
    const updateDiary = useNavigation();
    const updateRegister = useNavigation();
    const bleedInform = useNavigation();
    const hematologistConsult = useNavigation();
    const dentistConsult = useNavigation();
    const physioterapistConsult = useNavigation();

    return <SafeAreaView style={styles.view}>
        <View style={styles.buttonContainerA}>
            <ButtonComponent labelButton="Localize seu Hemocentro" onpress={() => {
                Alert.alert("Aviso", "Função em desenvolvimento")
            }} />
            <ButtonComponent labelButton="Atualize seu diário" onpress={() => {
                updateDiary.navigate('DiaryUpdate')
            }} />
            <ButtonComponent labelButton="Atualize seus dados" onpress={() => {
                updateRegister.navigate('UpdateRegister')
            }} />
            <ButtonComponent labelButton="Inclua / Atualize se houve hermatrose" onpress={() => {
                bleedInform.navigate('BleedInform')
            }} />
            <ButtonComponent labelButton="Inclua / Atualize consulta com o Hematologista" onpress={() => {
                hematologistConsult.navigate('HematologistConsult')
            }} />
            <ButtonComponent labelButton="Inclua / Atualize consulta com o Dentista" onpress={() => {
                dentistConsult.navigate('DentistConsult')
            }} />
            <ButtonComponent labelButton="Inclua / Atualize sessão de Fisioterapia" onpress={() => {
                physioterapistConsult.navigate('PhysioterapistConsult')
            }} />
        </View>
        <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFFFFF",
        height: "90%",
    },
    buttonContainerA: {
        paddingTop:10,
        flexDirection: "column",
        alignItems: "center"
        
    },
    bottomText: {
        paddingTop: 30,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})