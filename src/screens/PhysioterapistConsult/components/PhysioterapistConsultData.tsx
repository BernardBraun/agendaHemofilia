import React, { useState } from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Pressable, Platform } from "react-native"
import { SelectList } from 'react-native-dropdown-select-list';
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";
import SwitchComponent from "./SwitchComponent";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "../../commons/DateTimePicker";

const screenDimensions = Dimensions.get('screen');

export default function PhysioterapistConsultData() {


    const returnScreen = useNavigation();

    const clearField = () => {
        alert('Campo limpo');
    }

    const loginApp = () => {
        alert('Logando na aplicação');
    }

    const FirstSelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: '1' },
            { key: '2', value: '2' },
            { key: '3', value: '3' },
            { key: '4', value: '4' },
            { key: '5', value: '5' },
        ]

        return (
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                search={false}
                boxStyles={{ borderColor: "#EB0102" }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
                placeholder="Teste"
                dropdownStyles={{ borderColor: "#EB0102" }}
                dropdownTextStyles={{ color: "#EB0102" }}
            />
        )
    }

    const [dateConsult, setDateConsult] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const formatDate = (rawDate) => {
        let date = new Date(rawDate)

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();

        return `${day} / ${month} / ${year} - ${hour} : ${minute}}`;
    }

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    }

    const onchange = ({ type }, selectedDate) => {
        if (type === "set") {
            const currentDate = selectedDate;
            setDate(currentDate)

            if (Platform.OS === "android") {
                toggleDatePicker();
                setDateConsult(currentDate.toDateString())
            }
        } else {
            toggleDatePicker();
        }

    }

    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={20}>
        <ScrollView>
            <Text style={styles.text}>Data / Hora</Text>
            <DateTimePicker />
            <Text style={styles.text}>Unidade</Text>
            <FirstSelect />
            <Text style={styles.text}>Fisioterapeuta Responsável</Text>
            <TextInput style={styles.textInput}/>
            <Text style={styles.text}>Observações</Text>
            <TextInput
                style={styles.textInputObs}
                multiline={true}
                numberOfLines={6}
                keyboardType="default"
            />
            <View style={styles.switchContainer} >
                <Text style={styles.text}>Adicionar alarme</Text>
                <SwitchComponent />
            </View>

            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Ver Calendário" onpress={clearField} />
                <ButtonComponent labelButton="Voltar" onpress={() => { returnScreen.navigate('Home') }} />
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
    dateComponent: {
        width: "100%",
        borderRadius: 6,
        borderColor: "#EB0102",
        borderWidth: 1
    },
    textInputObs: {
        borderColor: "#EB0102",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        height: 160,
        color: "#EB0102",
        textAlignVertical: "top",
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
    switchContainer: {
        paddingTop: 15,
        paddingBottom: 6,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    buttonContainer: {
        marginTop: 30,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomText: {
        paddingTop: 25,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})