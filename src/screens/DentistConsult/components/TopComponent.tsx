import React from "react"
import {Image, StyleSheet, View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import logo from "../../../assets/LogoDiario.png"

export default function TopComponent() {
    return <SafeAreaView style={styles.container}>
        <View style={styles.headerUpdate}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.dailyUpdate}>Consulta com {"\n"}Dentista</Text>
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
        marginTop: 35,
        color: "#EB0102",
        marginLeft: 25,
        fontWeight: "bold",
        fontSize: 28,
        justifyContent: "center",
        alignItems: "center"
    }
})