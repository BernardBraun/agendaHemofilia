import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import logo from '../../../assets/LogoDiario.png';
import { loadTop } from '../../../services/loadData';
import { SafeAreaView } from 'react-native-safe-area-context';

class TopComponent extends React.Component {
    
    render() {
        return <SafeAreaView style={styles.container}>
            <View style={styles.headerWelcome}>
                <Image source={logo} style={styles.image}/>
                <Text style={styles.welcomeText}>Bem vindo {'\n'} Bernard</Text>
            </View>
            <Text style={styles.hematologist}>Seu Hematologista é o(a) Dr(a). Clarissa Ferreira</Text>
            <View style={styles.adviceView}>
                <Text style={styles.adviceText}>Sua infusão foi a 3 dias. {'\n'}Sua próxima infusão será em: 26/05/2023</Text>
            </View>
            <View style={styles.lineBreak}/>

        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFFFF",
        width: "100%"
    },
    headerWelcome:{
        flexDirection: "row"
    },
    image: {
        marginTop:10,
        marginLeft:10,
        width: 90,
        height: 120,

    },
    welcomeText: {
        color: "#EB0102",
        marginLeft: 16,
        fontWeight: "bold",
        fontSize: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    hematologist: {
        color: "#EB0102",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 20
    },
    adviceView: {
        margin: 10, 
        borderColor: "#EB0102",
        borderRadius: 10,
        borderWidth: 0.5,
        padding: 5
    },
    adviceText: {
        color: "#EB0102",
        fontSize: 30
    },
    lineBreak: {
        borderBottomColor: "#EB0102",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: 20,
        marginBottom: 10
    }
})

export default TopComponent;