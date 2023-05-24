import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View } from "react-native"
import ButtonComponent from "./ButtonComponent"

export default function MenuComponent() {
    const clearField = () => {
        alert('Campo limpo');
    }

    const loginApp = () => {
        alert('Logando na aplicação');
    }


    return <SafeAreaView style={styles.view}>
        <View style={styles.buttonContainerA}>
            <ButtonComponent labelButton="Localize seu Hemocentro" onpress={clearField} />
            <ButtonComponent labelButton="Atualize seu diário" onpress={loginApp} />
            <ButtonComponent labelButton="Inclua / Atualize a peridiocidade da infusão" onpress={loginApp} />
            <ButtonComponent labelButton="Inclua / Atualize se houve sangramento" onpress={loginApp} />
            <ButtonComponent labelButton="Inclua / Atualize consulta com o Hematologista" onpress={loginApp} />
            <ButtonComponent labelButton="Inclua / Atualize consulta com o Dentista" onpress={loginApp} />
            <ButtonComponent labelButton="Inclua / Atualizez se hoje faz fisioterapia" onpress={loginApp} />
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