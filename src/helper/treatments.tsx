import { URL_TREATMENT } from './baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchTreatments = async () => {
  const url: string = `${URL_TREATMENT}`;
  console.log(url);
  
  const token = await AsyncStorage.getItem('token');
  console.log(token);

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  })
  .then(response => response.json());
};
