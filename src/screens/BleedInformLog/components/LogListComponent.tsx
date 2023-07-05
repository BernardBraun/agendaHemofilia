import React, {JSXElementConstructor, useState} from "react"
import {StyleSheet, View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CheckboxComponent from "./CheckboxComponent"
import registers from "../../../mocks/regiters"
import ButtonComponent from "./ButtonComponent"
import CheckBox from "./CheckBox/checkBox"
import { useNavigation } from "@react-navigation/native"

const clearField = () => {
    alert('Campo limpo');
}




export default function LogListComponent() {
    const Boxes = registers.map(
        (a, i) => {
                return <CheckboxComponent id={a.id} date={a.date} time={a.time} local={a.local} />
        }
    )

    const returnScreen = useNavigation();

    const registersUse = registers.map

    return <SafeAreaView >
        <View >
            <CheckBox options={registers} onChange={op=>{alert(op)}}/>
            {/* <View>{Boxes}</View> */}
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Ver Registro" onpress={clearField}/>
                <ButtonComponent labelButton="Sair" onpress={() => {
                    returnScreen.navigate('BleedInformScreen')
                }}/>
            </View>
            <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
        </View>
    </SafeAreaView>
    
}

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    bottomText: {
        paddingTop: 30,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})