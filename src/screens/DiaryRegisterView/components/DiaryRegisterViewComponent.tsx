import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DiaryRegisterViewComponent() {
    const returnScreen = useNavigation();

    const route = useRoute();
    const { date, time, local, reason, bleedTypeLocal, treatment, observation } = route.params;

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.titles}>Data / Hora</Text>
        <View style={styles.borders}>
            <Text style={styles.info}>{date} - {time}</Text>
        </View>
        <Text style={styles.titles}>Unidade</Text>
        <View style={styles.borders}>
            <Text style={styles.info}>{local}</Text>
        </View>
        <Text style={styles.titles}>Motivo da Infusão</Text>
        <View style={styles.borders}>
            <Text style={styles.info}>{reason}</Text>
        </View>
        <Text style={styles.titles}>Tipo / Local do Sangramento</Text>
        <View style={styles.borders}>
            <Text style={styles.info}>{bleedTypeLocal}</Text>
        </View>
        <Text style={styles.titles}>Tratamento</Text>
        <View style={styles.borders}>
            <Text style={styles.treatment}>{treatment}</Text>
        </View>
        <Text style={styles.titles}>Observação</Text>
        <View style={styles.observation}>
            <Text style={styles.info}>{observation}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <ButtonComponent labelButton="Voltar" onpress={() => {
                returnScreen.navigate('DiaryLog');
            }}/>
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
    treatment: {
        color: "#EB0102",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        paddingTop:10,
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