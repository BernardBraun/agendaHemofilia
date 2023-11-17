import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "./ButtonComponent";
import CheckBox from "./CheckBox/CheckBox";
import axios from "axios";
import { URL_DIARY } from "../../../helper/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LogListComponent() {
  const returnLogin = useNavigation();
  const returnPage = useNavigation();
  const registerViewer = useNavigation();

  const [registers, setRegisters] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        console.error("Token não disponível");
        return returnLogin.navigate("Login");
      }

      const response = await axios.get(URL_DIARY + "/1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setRegisters(response.data);
    } catch (error) {
      console.error("Erro ao obter o registro: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [returnLogin]);

  const Boxes = registers.map((objectOfMap) => ({
    id: objectOfMap.id,
    label: `${new Date(objectOfMap.infusionDate).toLocaleDateString()} - ${new Date(objectOfMap.infusionDate).toLocaleTimeString()} - ${objectOfMap.hemocenter.name}`,
  }));

  const registersUse = registers.map((register) => ({
    id: register.id,
    date: register.date,
    time: register.time,
    local: register.local,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CheckBox 
            options={Boxes}
            onChange={(selectedIds) => {
                const firstSelectedId = selectedIds[0];
                const selectedRecord = registers.find((record) => record.id === firstSelectedId);
                setSelectedItem(selectedRecord);
            }} />
        <View>
          {/* Renderizar outras informações conforme necessário */}
        </View>
        <View style={styles.buttonContainer}>
        <ButtonComponent
  labelButton="Ver Registro"
  onPress={() => {
    // Verifique se há um item selecionado
    if (selectedItem) {
      // Extraia a data e a hora
      const [fullDate, fullTime] = selectedItem.infusionDate.split('T');
      const [year, month, day] = fullDate.split('-');
      const [hours, minutes] = fullTime.split(':');

      // Navegue para a tela de visualização de registro, passando os dados necessários
      registerViewer.navigate('DiaryRegisterView', {
        date: `${day}/${month}/${year}`,
        time: `${hours}:${minutes}`,
        local: selectedItem.hemocenter.name,
        reason: selectedItem.reason,
        bleedTypeLocal: selectedItem.bleedTypeLocal,
        treatment: selectedItem.treatment.title + ' ' + selectedItem.treatment.dosage,
        observation: selectedItem.observation,
        // Adicione outros campos conforme necessário
      });
    } else {
      // Informe ao usuário que nenhum item foi selecionado
      console.warn('Nenhum item selecionado para visualização.');
    }
  }}
/>
          <ButtonComponent
            labelButton="Voltar"
            onPress={() => {
              returnPage.navigate("DiaryUpdateScreen");
            }}
          />
        </View>
        <View>
          <Text style={styles.bottomText}>
            Copyright {'\u00A9'} Bernard Braun da Silva
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
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