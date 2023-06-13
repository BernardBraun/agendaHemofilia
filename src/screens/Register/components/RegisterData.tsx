import React from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { SelectList } from 'react-native-dropdown-select-list';

import SelectListComponent from '../../DiaryLog/components/SelectListComponent';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";

const screenDimensions  = Dimensions.get('screen');

export default function FieldComponent() {


    const clearField = () => {
        alert('Campo limpo');
    }

    const loginApp = () => {
        alert('Logando na aplicação');
    }

    const FirstSelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: 'Mobiles' },
            { key: '2', value: 'Appliances' },
            { key: '3', value: 'Cameras' },
            { key: '4', value: 'Computers' },
            { key: '5', value: 'Vegetables' },
            { key: '6', value: 'Diary Products' },
            { key: '7', value: 'Drinks' },
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

    const SecondSelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: 'Mobiles' },
            { key: '2', value: 'Appliances' },
            { key: '3', value: 'Cameras' },
            { key: '4', value: 'Computers' },
            { key: '5', value: 'Vegetables' },
            { key: '6', value: 'Diary Products' },
            { key: '7', value: 'Drinks' },
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

    const ThirdSelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: 'Mobiles' },
            { key: '2', value: 'Appliances' },
            { key: '3', value: 'Cameras' },
            { key: '4', value: 'Computers' },
            { key: '5', value: 'Vegetables' },
            { key: '6', value: 'Diary Products' },
            { key: '7', value: 'Drinks' },
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

    const FourthSelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: 'A / Leve' },
            { key: '2', value: 'A / Moderada' },
            { key: '3', value: 'A / Grave' },
            { key: '4', value: 'B / Leve' },
            { key: '5', value: 'B / Moderada' },
            { key: '6', value: 'B / Grave' }
        ]

        return (
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                search={false}
                boxStyles={{ borderColor: "#EB0102", width: "100%", height: 35, borderRadius: 6, }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold", paddingLeft: 0 }}
                placeholder="Selecione o tipo de sua Hemofilia"
                dropdownStyles={{ borderColor: "#EB0102" }}
                dropdownTextStyles={{ color: "#EB0102" }}

            />
        )
    }    

    return <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={20}>
            <ScrollView>
            <Text style={styles.text}>Nome completo</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Idade</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Altura</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Peso</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Tipo da Hemofilia</Text>
            <FourthSelect />
            <Text style={styles.text}>Observações</Text>
            <TextInput 
                style={styles.textInput}
                multiline={true}
                numberOfLines={6}
                keyboardType="default"
            />
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Ver Calendário" onpress={clearField} />
                <ButtonComponent labelButton="Voltar" onpress={loginApp} />
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
    textInput: {
        borderColor: "#EB0102",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        height: 160,
        color: "#EB0102",
        textAlignVertical: "top",
    },
    textInputRegister: {
        borderColor: "#EB0102",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        height: 30,
        color: "#EB0102",
        textAlignVertical: "top",
    },
    buttonContainer: {
        paddingTop: 15,
        paddingBottom: 6,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomText: {
        paddingTop: 30,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})