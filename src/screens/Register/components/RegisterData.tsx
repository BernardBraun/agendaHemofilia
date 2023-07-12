import React, { useState } from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { SelectList } from 'react-native-dropdown-select-list';

import SelectListComponent from '../../DiaryLog/components/SelectListComponent';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const screenDimensions = Dimensions.get('screen');



export default function FieldComponent() {


    const [formData, setFormData] = useState({
        name: '',
        birthdate: '',
        height: '',
        weight: '',
        hemophiliaType: '',
        infusion: '',
        cellphoneNumber: '',
        email: '',
        password: '',
        address: '',
        district: '',
        city: '',
        state: '',
        postalCode: '',
        motherName: '',
        fatherName: '',
        bloodCenter: '',
        bloodCenterPhone: '',
      });


    const handleNameChange = (value) => {
        setFormData({ ...formData, name: value});
    }

    const handleBirthdateChange = (value) => {
        setFormData({ ...formData, birthdate: value})
    }

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [hemophiliaType, setHemophiliaType] = useState('');
    const [infusion, setInfusion] = useState('');
    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [provincy, setProvincy] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [bloodCenter, setBloodCenter] = useState('');
    const [bloodCenterPhone, setBloodCenterPhone] = useState('');

    const userRegister = () => {

    }

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
            { key: 'A_LEVE', value: 'A / Leve' },
            { key: 'A_MODERADA', value: 'A / Moderada' },
            { key: 'A_GRAVE', value: 'A / Grave' },
            { key: 'B_LEVE', value: 'B / Leve' },
            { key: 'B_MODERADA', value: 'B / Moderada' },
            { key: 'B_GRAVE', value: 'B / Grave' }
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
            <TextInput
                style={styles.textInputRegister}
                value={name}
                onChangeText={text => setName(text)} />
            <Text style={styles.text}>Data de Nascimento</Text>
            <TextInput 
                inputMode="decimal" 
                style={styles.textInputRegister}
                value={birthdate}
                onChangeText={text => setBirthdate(text)} />
            <Text style={styles.text}>Altura</Text>
            <TextInput 
                inputMode="decimal"
                style={styles.textInputRegister}
                value={height}
                onChangeText={text => setHeight(text)} />
            <Text style={styles.text}>Peso</Text>
            <TextInput 
                inputMode="decimal" 
                style={styles.textInputRegister}
                value={weight}
                onChangeText={text => setWeight(text)} />
            <Text style={styles.text}>Tipo da Hemofilia</Text>
            <FourthSelect />
            <Text style={styles.text}>Possui Inibidor?</Text>
            <FourthSelect />
            <Text style={styles.text}>Quantidade de dias para infusão</Text>
            <ThirdSelect />
            <Text style={styles.text}>Celular</Text>
            <TextInput 
                inputMode="tel"
                style={styles.textInputRegister}
                value={cellphoneNumber}
                onChangeText={text => setCellphoneNumber(text)} />
            <Text style={styles.text}>E-mail</Text>
            <TextInput 
                inputMode="email" 
                style={styles.textInputRegister}
                value={email}
                onChangeText={text => setEmail(text)} />
            <Text style={styles.text}>Senha para acesso ao app</Text>
            <TextInput 
                inputMode="text" 
                secureTextEntry={true} 
                style={styles.textInputRegister}
                value={password}
                onChangeText={text => setPassword(text)} />
            <Text style={styles.text}>Endereço</Text>
            <TextInput 
                style={styles.textInputRegister}
                value={address}
                onChangeText={text => setAddress(text)} />
            <Text style={styles.text}>Bairro</Text>
            <TextInput 
                style={styles.textInputRegister}
                value={district}
                onChangeText={text => setDistrict(text)} />
            <Text style={styles.text}>Cidade</Text>
            <TextInput 
                style={styles.textInputRegister}
                value={city}
                onChangeText={text => setCity(text)} />
            <Text style={styles.text}>Estado</Text>
            <TextInput 
                style={styles.textInputRegister}
                value={provincy}
                onChangeText={text => setProvincy(text)} />
            <Text style={styles.text}>CEP</Text>
            <TextInput 
                inputMode="numeric" 
                style={styles.textInputRegister}
                value={postalCode}
                onChangeText={text => setPostalCode(text)} />
            <Text style={styles.text}>Nome da Mãe</Text>
            <TextInput 
                style={styles.textInputRegister}
                value={motherName}
                onChangeText={text => setMotherName(text)} />
            <Text style={styles.text}>Nome do Pai</Text>
            <TextInput 
                style={styles.textInputRegister}
                value={fatherName}
                onChangeText={text => setFatherName(text)} />
            <Text style={styles.text}>Hemocentro</Text>
            <TextInput 
                style={styles.textInputRegister}
                value={bloodCenter}
                onChangeText={text => setBloodCenter(text)} />
            <Text style={styles.text}>Telefone Hemocentro</Text>
            <TextInput 
                inputMode="tel"
                style={styles.textInputRegister}
                value={bloodCenterPhone}
                onChangeText={text => setBloodCenterPhone(text)} />
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Sair" onpress={() => { returnScreen.navigate('Login') }} />
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
        paddingTop: 0,
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