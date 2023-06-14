import React from "react"
import {Image, StyleSheet, View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import logo from "../../../assets/LogoDiario.png"

export default function Top() {
    return <SafeAreaView style={styles.container}>
        <View style={styles.headerUpdate}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.dailyUpdate}>Visualizar Registro de Sangramento</Text>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    logo: {
        width: 90,
        height: 120
    },
    headerUpdate: {
        flexDirection: "row"
    },
    dailyUpdate: {
        marginTop: 45,
        color: "#EB0102",
        fontWeight: "bold",
        fontSize: 23,
        justifyContent: "center",
        alignItems: "center"
    }
})