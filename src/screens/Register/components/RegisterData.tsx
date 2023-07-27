import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Platform, Alert } from "react-native"

import { SelectList } from 'react-native-dropdown-select-list';

import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import SelectStates from "../../commons/SelectStates";
import SelectCities from "../../commons/SelectCities";
import SelectHemocenter from "../../commons/SelectHemocenter";
import HemophiliaType from "../../commons/HemophiliaType";
import Inhibitor from "../../commons/Inhibitor";
import InfusionDays from "../../commons/InfusionDays";



export default function FieldComponent() {

    const [selectedState, setSelectedState] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null);
    const [formData, setFormData] = useState({
        completeName: '',
        birthDate: '',
        height: 0,
        weight: '',
        hemophiliaType: '',
        email: '',
        inhibitor: false,
        infusionDays: '',
        cellPhone: '',
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
        hemocenterId: 0
    });
    const [formErrors, setFormErrors] = useState({});
    const renderErrorMessage = (fieldName) => {
        return formErrors[fieldName] ? <Text style={styles.errorMessage}>{formErrors[fieldName]}</Text> : null;
      };

    //sensitive data info
    const handleNameChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            completeName: value,
        }));
    };
    const handleBirthdateChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            birthDate: value,
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
            cellPhone: value,
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

    const handleHemocenterChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            hemocenterId: value,
        }));
    };

    const handleHemophiliaTypeChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            hemophiliaType: value,
        }));
    };

    const handleSelectInhibitor = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            inhibitor: value,
        }));
    };
    
    const handleSelectInfusionDays = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            infusionDays: value,
        }));
    };

    const returnScreen = useNavigation();


    

    const json = JSON.stringify(formData);

    const handleRegister = () => {
        const BASE_URL = "http://10.1.11.249:8082/api";
        const url = `${BASE_URL}/person`;
    
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Resposta da API:", data);
            Alert.alert(
                "Sucesso!",
                "Seu cadastro foi realizado com sucesso.",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            returnScreen.navigate('Login')
                        }
                    }
                ],
                { cancelable: false }    
            )

          })
          .catch((error) => {
            console.error("Erro ao enviar o formulário:", error);
            Alert.alert("Erro!","Tente novamente mais tarde.")
          });
    };
      

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
                {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Data de Nascimento</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.birthdate}
                onChangeText={(value) => handleBirthdateChange(value)} />
                {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Altura</Text>
            <TextInput
                inputMode="decimal"
                style={styles.textInputRegister}
                value={formData.height}
                onChangeText={(value) => handleHeightChange(value)} />
                {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Peso</Text>
            <TextInput
                inputMode="decimal"
                style={styles.textInputRegister}
                value={formData.weight}
                onChangeText={(value) => handleWeightChange(value)} />
                {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Tipo da Hemofilia</Text>
            <HemophiliaType onSelect={handleHemophiliaTypeChange}/>
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Possui Inibidor?</Text>
            <Inhibitor onSelect={handleSelectInhibitor}/>
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Quantidade de dias para infusão</Text>
            <InfusionDays onSelect={handleSelectInfusionDays}/>
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Celular</Text>
            <TextInput
                inputMode="tel"
                style={styles.textInputRegister}
                value={formData.cellphoneNumber}
                onChangeText={(value) => handleCellphoneNumberChange(value)} />
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>E-mail</Text>
            <TextInput
                inputMode="email"
                style={styles.textInputRegister}
                value={formData.login.login}
                onChangeText={(value) => handleEmailChange(value)} />
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Senha para acesso ao app</Text>
            <TextInput
                inputMode="text"
                secureTextEntry={true}
                style={styles.textInputRegister}
                value={formData.login.password}
                onChangeText={(value) => handlePasswordChange(value)} />
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Endereço</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.address.streetName}
                onChangeText={(value) => handleStreetNameChange(value)} />
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Bairro</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.address.district}
                onChangeText={(value) => handleDistrictChange(value)} />
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Estado</Text>
            <SelectStates onSelect={handleStateChange} />
            {/* {renderErrorMessage("state")} */}
            <Text style={styles.text}>Cidade</Text>
            <SelectCities selectedState={selectedState} onSelect={handleCityChange} />
            {/* {renderErrorMessage("city")} */}
            <Text style={styles.text}>CEP</Text>
            <TextInput
                inputMode="numeric"
                style={styles.textInputRegister}
                value={formData.address.postalCode}
                onChangeText={(value) => handlePostalCodeChange(value)} />
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Nome da Mãe</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.motherName}
                onChangeText={(value) => handleMotherNameChange(value)} />
            {/* {renderErrorMessage("name")} */}
            <Text style={styles.text}>Nome do Pai</Text>
            <TextInput
                style={styles.textInputRegister}
                value={formData.fatherName}
                onChangeText={(value) => handleFatherNameChange(value)} />
            <Text style={styles.text}>Hemocentro</Text>
            {/* {renderErrorMessage("name")} */}
            <SelectHemocenter onSelect={handleHemocenterChange}/>
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Sair" onpress={() => { returnScreen.navigate('Login') }} />
                <ButtonComponent labelButton="Cadastrar" onpress={() => {
                    console.log(json)
                    handleRegister()
                    
                    }} />
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