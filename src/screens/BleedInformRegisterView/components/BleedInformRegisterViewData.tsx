import React from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Alert } from "react-native"


import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";

const screenDimensions  = Dimensions.get('screen');

export default function BleedInformRegisterViewData() {
    const clearField = () => {
        Alert.alert('Teste', 'Hello World');
    }

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.titles}>Data / Hora</Text>
        <View style={styles.borders}>
            <Text style={styles.info}>25/05/2023 - 10:45:00</Text>
        </View>
        <Text style={styles.titles}>local de sangramento</Text>
        <View style={styles.borders}>
            <Text style={styles.info}>Tornozelo Esquerdo</Text>
        </View>
        <Text style={styles.titles}>Medida Preventiva / Tratativas</Text>
        <View style={styles.observation}>
            <Text style={styles.info}>Levado ao Hemocentro para infusão emergencial e colocado gelo.</Text>
        </View>
        <Text style={styles.titles}>Observações</Text>
        <View style={styles.observation}>
            <Text style={styles.info}>Em observação após infusão e gelo para ver se o sangramento para.</Text>
        </View>
        <View style={styles.buttonContainer}>
            <ButtonComponent labelButton="Voltar" onpress={clearField}/>
        </View>
        <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 16
    },
    titles: {
        color: "#EB0102",
        fontWeight: "bold",
        paddingBottom:6
    },
    borders: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#EB0102",
        width: "100%",
        height: 40
    },
    observation:{
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#EB0102",
        width: "100%",
        height: 160
    },
    info: {
        color: "#EB0102",
        fontWeight: "bold",
        justifyContent: "center",
        fontSize: 24,
        paddingLeft: 10
    },
    buttonContainer: {
        paddingTop: 15,
        paddingBottom: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    bottomText: {
        paddingTop: 30,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})