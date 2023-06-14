import React from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { SelectList } from 'react-native-dropdown-select-list';

import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";

const screenDimensions  = Dimensions.get('screen');

export default function BleedInformData() {


    const clearField = () => {
        Alert.alert('Campo limpo', 'Campos limpos');
    }

    const loginApp = () => {
        Alert.alert('Logando na aplicação', 'Dados validados com sucesso');
    }


    return <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={20}>
            <ScrollView>
            <Text style={styles.text}>Data / Hora</Text>
            <TextInput 
                style={styles.textInput}
                multiline={true}
                numberOfLines={6}
                keyboardType="default"
            />
            <Text style={styles.text}>Local de sangramento</Text>
            <TextInput 
                style={styles.textInput}
                multiline={true}
                numberOfLines={6}
                keyboardType="default"
            />
            <Text style={styles.text}>Medidas Preventivas / Tratativas</Text>
            <TextInput 
                style={styles.textInputObserv}
                multiline={true}
                numberOfLines={6}
                keyboardType="default"
            />
            <Text style={styles.text}>Observações</Text>
            <TextInput 
                style={styles.textInputObserv}
                multiline={true}
                numberOfLines={6}
                keyboardType="default"
            />
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Ver Registros" onpress={loginApp} />
                <ButtonComponent labelButton="Voltar" onpress={clearField} />
                <ButtonComponent labelButton="Salvar" onpress={loginApp} />
            </View>
            <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
            </ScrollView>
        </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        color: "#EB0102",
        fontWeight: "bold"
    },
    textInput: {
        borderColor: "#EB0102",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        height: 45,
        color: "#EB0102",
        textAlignVertical: "top",
    },
    textInputObserv: {
        borderColor: "#EB0102",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        height: 160,
        color: "#EB0102",
        textAlignVertical: "top",
    },
    buttonContainer: {
        paddingTop: 15,
        paddingBottom: 6,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    bottomText: {
        paddingTop: 50,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})