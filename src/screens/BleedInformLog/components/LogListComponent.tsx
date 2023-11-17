import React, {JSXElementConstructor, useEffect, useState} from "react"
import {StyleSheet, View, Text, Alert} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CheckboxComponent from "./CheckboxComponent"
import registers from "../../../mocks/regiters"
import ButtonComponent from "./ButtonComponent"
import CheckBox from "./CheckBox/checkBox"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { URL_BLEEDLOG } from "../../../helper/baseUrl"

const clearField = () => {
    Alert.alert('Atenção!','Campo limpo');
}




export default function LogListComponent() {
    const [data,setData] = useState([]);

    const url = `${URL_BLEEDLOG}`;

    const fetchData = async () => {
        try {
          const response = await axios.get(url);
          const data = response.data;
          setData(data); // Atualize o estado com os dados buscados
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

      const renderCheckboxes = () => {
        return data.map((a) => (
          <CheckboxComponent
            key={a.id}
            id={a.id}
            date={a.date}
            time={a.time}
            local={a.local}
          />
        ));
      };

    const returnScreen = useNavigation();

    const registersUse = registers.map

    return <SafeAreaView >
        <View >
            <CheckBox options={registers} onChange={op=>{alert(op)}}/>
            {renderCheckboxes()}
            <View style={styles.buttonContainer}>
                <ButtonComponent labelButton="Ver Registro" onpress={clearField}/>
                <ButtonComponent labelButton="Sair" onpress={() => {
                    returnScreen.navigate('BleedInformScreen')
                }}/>
            </View>
            <Text style={styles.bottomText}>Copyright {'\u00A9'} Bernard Braun da Silva</Text>
        </View>
    </SafeAreaView>
    
}

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    bottomText: {
        paddingTop: 30,
        paddingLeft: 10,
        color: "#000000",
        fontSize: 6
    }
})