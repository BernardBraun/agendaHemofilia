import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SelectList } from 'react-native-dropdown-select-list';

import SelectListComponent from '../../DiaryLog/components/SelectListComponent';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ButtonComponent from "./ButtonComponent";
import DateTimePicker from "../../commons/DateTimePicker";
import { URL_TREATMENT } from "../../../helper/baseUrl";
import SelectTreatments from "../../commons/SelectTreatments";

const screenDimensions = Dimensions.get('screen');

export default function FieldComponent() {

    const [formData, setFormData] = useState({
        infusionDate: '',
        unity: '',
        reason: '',
        infusionLocal: '',
        treatment: '',
        observation: ''
    });
    const [treatments, setTreatments] = useState([]);


    const handleInfusionDate = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            infusionDate: value,
        }));
    };
    const handleUnity = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            infusionDate: value,
        }));
    };
    const handleReason = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            infusionDate: value,
        }));
    };
    const handleInfusionLocal = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            infusionDate: value,
        }));
    };
    const handleObservation = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            infusionDate: value,
        }));
    };
    const handleTreatment = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            treatment: value,
        }));
    };

    const returnHome = useNavigation();

    const diaryUpdaeLog = useNavigation();

    const UnitySelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: 'Em casa' },
            { key: '2', value: 'Hemocentro' },
            { key: '3', value: 'Hospital' },
        ]

        return (
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                search={false}
                boxStyles={{ borderColor: "#EB0102" }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
                placeholder="Selecione a unidade ou local onde foi feito"
                dropdownStyles={{ borderColor: "#EB0102" }}
                dropdownTextStyles={{ color: "#EB0102" }}
            />
        )
    }

    const SecondSelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: 'Profilaxia' },
            { key: '2', value: 'Emergência' },
            { key: '3', value: 'Imunotolerância' },
            { key: '4', value: 'Cirurgia' }
        ]

        return (
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                search={false}
                boxStyles={{ borderColor: "#EB0102" }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
                placeholder="Selecione o motivo da infusão"
                dropdownStyles={{ borderColor: "#EB0102" }}
                dropdownTextStyles={{ color: "#EB0102" }}
            />
        )
    }

    const ThirdSelect = () => {

        const [selected, setSelected] = React.useState("");

        const data = [
            { key: '1', value: 'Hermatrose' },
            { key: '2', value: 'Ferimento / Trauma' },
            { key: '3', value: 'Local' },
            { key: '4', value: 'Outros (detalhar na observação)' },
        ]

        return (
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                search={false}
                boxStyles={{ borderColor: "#EB0102" }}
                inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
                placeholder="Informe tipo de sangramento"
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
            <Text style={styles.text}>Data / Hora</Text>
            <DateTimePicker />
            <Text style={styles.text}>Unidade</Text>
            <UnitySelect />
            <Text style={styles.text}>Motivo da Infusão</Text>
            <SecondSelect />
            <Text style={styles.text}>Tipo / Local do Sangramento</Text>
            <ThirdSelect />
            <Text style={styles.text}>Tratamento</Text>
            <SelectTreatments onSelect={handleTreatment}/>
            <Text style={styles.text}>Observações</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                numberOfLines={6}
                keyboardType="default"
            />
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Ver Registros" onpress={() => {
                    diaryUpdaeLog.navigate('DiaryLog')
                }} />
                <ButtonComponent labelButton="Voltar" onpress={() => {
                    returnHome.navigate('Home')
                }} />
                <ButtonComponent labelButton="Salvar" onpress={() => {

                }} />
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
    buttonContainer: {
        paddingTop: 15,
        paddingBottom: 6,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomText: {
        paddingTop: 10,
        color: "#000000",
        fontSize: 6
    }
})