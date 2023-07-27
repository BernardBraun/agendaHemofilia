import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export const checkTokenValidity = async () => {
  try {


    const dataAccess = await AsyncStorage.getItem('dataAccess')

    const tokenExpirationTime = 1 * 60 * 1000;
    const dataAccessToken = new Date(dataAccess);

    const actualDate = new Date(Date.now());

    if (actualDate - dataAccessToken > tokenExpirationTime) {
      Alert.alert("Atenção!", "Sessão expirada! Faça login novamente.")
       return { valid: false }
    }

    return { valid: true};
  } catch (error) {
    console.log('Erro ao verificar o token:', error);
    return { valid: false };
  }
};
