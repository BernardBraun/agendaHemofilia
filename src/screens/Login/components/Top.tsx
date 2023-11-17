import React from "react";

import logo from "../../../assets/LogoDiario.png"
import { Image, StyleSheet, View } from "react-native";

export default function Top() {
    
        return <View style={styles.view}>
            <Image style={styles.image} source={logo}/>
        </View>
    
}

const styles = StyleSheet.create ({
    view: {
        paddingTop: 20,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 240,
        height: 320,
    }
})