import React from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { SelectList } from 'react-native-dropdown-select-list';

import SelectListComponent from '../../DiaryLog/components/SelectListComponent';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const screenDimensions  = Dimensions.get('screen');

export default function FieldComponent() {


    const clearField = () => {
        alert('Campo limpo');
    }

    const returnScreen = useNavigation();


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
            { key: '1', value: '1' },
            { key: '2', value: '2' },
            { key: '3', value: '3' },
            { key: '4', value: '4' },
            { key: '5', value: '5' }
        ]

        return (
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                search={false}
                boxStyles={{ borderColor: "#EB0102" }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
                placeholder="Defina quantas vezes você faz infusão"
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
                boxStyles={{ borderColor: "#EB0102", width: "100%", height: 45 }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
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
            <Text style={styles.text}>Data de Nascimento</Text>
            <TextInput inputMode="decimal" style={styles.textInputRegister } />
            <Text style={styles.text}>Altura</Text>
            <TextInput inputMode="decimal" style={styles.textInputRegister}/>
            <Text style={styles.text}>Peso</Text>
            <TextInput inputMode="decimal" style={styles.textInputRegister}/>
            <Text style={styles.text}>Tipo da Hemofilia</Text>
            <FourthSelect />
            <Text style={styles.text}>Quantidade de dias para infusão</Text>
            <ThirdSelect />
            <Text style={styles.text}>Celular</Text>
            <TextInput inputMode="tel" style={styles.textInputRegister}/>
            <Text style={styles.text}>E-mail</Text>
            <TextInput inputMode="email" style={styles.textInputRegister}/>
            <Text style={styles.text}>Endereço</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Bairro</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Cidade</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Estado</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>CEP</Text>
            <TextInput inputMode="numeric" style={styles.textInputRegister}/>
            <Text style={styles.text}>Nome da Mãe</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Nome do Pai</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Hemocentro</Text>
            <TextInput style={styles.textInputRegister}/>
            <Text style={styles.text}>Telefone Hemocentro</Text>
            <TextInput inputMode="tel" style={styles.textInputRegister}/>
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Sair" onpress={() => {returnScreen.navigate('Home')}} />
                <ButtonComponent labelButton="Cadastrar" onpress={clearField} />
            </View>
            <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
            </ScrollView>
        </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
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
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        paddingTop:0,
        paddingBottom: -100
    },
    buttonContainer: {
        paddingTop: 15,
        paddingBottom: 6,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    bottomText: {
        paddingTop: 30,
        paddingLeft: 5,
        color: "#000000",
        fontSize: 6
    }
})