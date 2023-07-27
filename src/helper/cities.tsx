const BASE_URL = 'http://10.1.11.249:8082/api';

export const fetchCitiesForStates = (stateId) => {
    const url: string = `${BASE_URL}` + "/cities/" + `${stateId}`
    console.log(url)
    return fetch(url).then(response => response.json())
}