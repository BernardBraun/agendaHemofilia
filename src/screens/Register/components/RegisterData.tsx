import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Platform } from "react-native"

import { SelectList } from 'react-native-dropdown-select-list';

import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import SelectStates from "../../commons/SelectStates";
import SelectCities from "../../commons/SelectCities";



export default function FieldComponent() {

    const [selectedState, setSelectedState] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        birthdate: '',
        height: '',
        weight: '',
        hemophiliaType: '',
        email: '',
        inhibitor: '',
        infusion: '',
        cellphoneNumber: '',
        login: {
            login: '',
            password: ''
        },
        address: {
            streetName: '',
            district: '',
            cityId: 0,
            postalCode: ''
        },
        motherName: '',
        fatherName: '',
        hemocenterId: ''
    });

    //sensitive data info
    const handleNameChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            name: value,
        }));
    };
    const handleBirthdateChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            birthdate: value,
        }));
    };
    const handleHeightChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            height: value,
        }));
    };
    const handleWeightChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            weight: value,
        }));
    };
    const handleCellphoneNumberChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            cellphoneNumber: value,
        }));
    };
    const handleMotherNameChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            motherName: value,
        }));
    };
    const handleFatherNameChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            fatherName: value,
        }));
    };


    //login info
    const handleEmailChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            login: {
                ...prevFormData.login,
                login: value,
            },
            email: value
        }));
    };
    const handlePasswordChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            login: {
                ...prevFormData.login,
                password: value,
            },
        }));
    };

    //address info
    const handleStreetNameChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            address: {
                ...prevFormData.address,
                streetName: value,
            },
        }));
    };
    const handleDistrictChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            address: {
                ...prevFormData.address,
                district: value,
            },
        }));
    };
    
    const handleStateChange = (value) => {
        setSelectedState(value);
    };

    const handleCityChange = (value) => {
        setSelectedCity(value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            address: {
                ...prevFormData.address,
                cityId: value,
            },
        }));
    };


    const handlePostalCodeChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            address: {
                ...prevFormData.address,
                postalCode: value,
            },
        }));
    };

    const returnScreen = useNavigation();

    
    const InfusionDays = () => {

        const [selected, setSelected] = React.useState("");

        const handleSelectInfusionDays = (value) => {
            setSelected(value);
            setFormData((prevFormData) => ({
                ...prevFormData,
                hemophiliaType: value,
            }));
        };

        const data = [
            { key: '1', value: '1' },
            { key: '2', value: '2' },
            { key: '3', value: '3' },
            { key: '4', value: '4' },
            { key: '5', value: '5' }
        ]

        return (
            <SelectList
                setSelected={handleSelectInfusionDays}
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

    const Inhibitor = () => {

        const [selected, setSelected] = React.useState("");

        const handleSelectInhibitor = (value) => {
            setSelected(value);
            setFormData((prevFormData) => ({
                ...prevFormData,
                hemophiliaType: value,
            }));
        };

        const data = [
            { key: '1', value: 'Sim' },
            { key: '2', value: 'Não' }
        ]

        return (
            <SelectList
                setSelected={handleSelectInhibitor}
                data={data}
                save="value"
                search={false}
                boxStyles={{ borderColor: "#EB0102" }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
                placeholder="Possui inibidor?"
                dropdownStyles={{ borderColor: "#EB0102" }}
                dropdownTextStyles={{ color: "#EB0102" }}
            />
        )
    }

    const HemophiliaType = () => {

        const [selected, setSelected] = React.useState("");

        const handleSelectHemophiliaType = (value) => {
            setSelected(value);
            setFormData((prevFormData) => ({
                ...prevFormData,
                hemophiliaType: value,
            }));
        };

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
                setSelected={handleSelectHemophiliaType}
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

    const json = JSON.stringify(formData);

    return <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={20}>
        <ScrollView>
            <Text style={styles.text}>Nome completo</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.name}
                onChangeText={(value) => handleNameChange(value)} />
            <Text style={styles.text}>Data de Nascimento</Text>
            <TextInput
                inputMode="decimal"
                style={styles.textInputRegister}
                value={formData.birthdate}
                onChangeText={(value) => handleBirthdateChange(value)} />
            <Text style={styles.text}>Altura</Text>
            <TextInput
                inputMode="decimal"
                style={styles.textInputRegister}
                value={formData.height}
                onChangeText={(value) => handleHeightChange(value)} />
            <Text style={styles.text}>Peso</Text>
            <TextInput
                inputMode="decimal"
                style={styles.textInputRegister}
                value={formData.weight}
                onChangeText={(value) => handleWeightChange(value)} />
            <Text style={styles.text}>Tipo da Hemofilia</Text>
            <HemophiliaType />
            <Text style={styles.text}>Possui Inibidor?</Text>
            <Inhibitor />
            <Text style={styles.text}>Quantidade de dias para infusão</Text>
            <InfusionDays />
            <Text style={styles.text}>Celular</Text>
            <TextInput
                inputMode="tel"
                style={styles.textInputRegister}
                value={formData.cellphoneNumber}
                onChangeText={(value) => handleCellphoneNumberChange(value)} />
            <Text style={styles.text}>E-mail</Text>
            <TextInput
                inputMode="email"
                style={styles.textInputRegister}
                value={formData.login.login}
                onChangeText={(value) => handleEmailChange(value)} />
            <Text style={styles.text}>Senha para acesso ao app</Text>
            <TextInput
                inputMode="text"
                secureTextEntry={true}
                style={styles.textInputRegister}
                value={formData.login.password}
                onChangeText={(value) => handlePasswordChange(value)} />
            <Text style={styles.text}>Endereço</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.address.streetName}
                onChangeText={(value) => handleStreetNameChange(value)} />
            <Text style={styles.text}>Bairro</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.address.district}
                onChangeText={(value) => handleDistrictChange(value)} />
            <Text style={styles.text}>Estado</Text>
            <SelectStates onSelect={handleStateChange}/>
            <Text style={styles.text}>Cidade</Text>
            <SelectCities  selectedState={selectedState} onSelect={handleCityChange}/>
            <Text style={styles.text}>CEP</Text>
            <TextInput
                inputMode="numeric"
                style={styles.textInputRegister}
                value={formData.address.postalCode}
                onChangeText={(value) => handlePostalCodeChange(value)} />
            <Text style={styles.text}>Nome da Mãe</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.motherName}
                onChangeText={(value) => handleMotherNameChange(value)} />
            <Text style={styles.text}>Nome do Pai</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.fatherName}
                onChangeText={(value) => handleFatherNameChange(value)} />
            <Text style={styles.text}>Hemocentro</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.bloodCenter}
                onChangeText={() => { }} />
            <Text style={styles.text}>Telefone Hemocentro</Text>
            <TextInput
                inputMode="tel"
                style={styles.textInputRegister}
                value={formData.bloodCenterPhone}
                onChangeText={() => { }} />
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Sair" onpress={() => { returnScreen.navigate('Login') }} />
                <ButtonComponent labelButton="Cadastrar" onpress={() => { console.log(json) }} />
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