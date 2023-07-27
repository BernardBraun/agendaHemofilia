import React from 'react';
import { Image, Text, View, StyleSheet, Alert } from 'react-native';
import logo from '../../../assets/LogoDiario.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

class TopComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            lastInfusionDate: ''
        };
    }

    async componentDidMount() {
        try {
            // Ao montar o componente, busca o email salvo no AsyncStorage
            const userEmail = await AsyncStorage.getItem('userEmail');
            const token = await AsyncStorage.getItem('token');
            if (userEmail && token) {
                //criar chamada usando token e email
                const url = 'https://api.adviceslip.com/advice';

                fetch(url, {
                    method: "GET",
                    // headers: {
                    //     "Content-Type": "application/json",
                    // },
                    // body: JSON.stringify(formData),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Erro na requisição. Status code: ' + response.status);
                        }
                        return response.json()
                    })
                    .then((data) => {
                        try {
                            // Alert.alert("Teste", data.slip.advice)
                            console.log(data.slip.advice)
                            this.setState({ userName: data.slip.id, lastInfusionDate: data.slip.advice });
                        } catch (error) {
                            Alert.alert("Erro", "Favor tente novamente mais tarde.")
                        }
                    })
                //utilizar o json para informar userName e lastInfusionDate

                //this.setState({ userName: data.userName, lastInfusionDate: data.lastInfusionDate });

                // this.setState({ userName: "Theo", lastInfusionDate: new Date().toString() });

            }
        } catch (error) {
            // Trate qualquer erro que possa ocorrer durante a busca
            console.log('Erro ao buscar o email do usuário:', error);
        }
    }

    render() {
        const { userName } = this.state;
        const { lastInfusionDate } = this.state;


        return <SafeAreaView style={styles.container}>
            <View style={styles.headerWelcome}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.welcomeText}>Bem vindo {'\n'} {userName}</Text>
            </View>
            <View style={styles.adviceView}>
                <Text style={styles.adviceText}>Sua última infusão foi no dia: {lastInfusionDate}</Text>
            </View>
            <View style={styles.lineBreak} />

        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        width: "100%"
    },
    headerWelcome: {
        flexDirection: "row"
    },
    image: {
        marginTop: 10,
        marginLeft: 10,
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