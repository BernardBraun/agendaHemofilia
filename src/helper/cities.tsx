import {URL_CITIES} from './baseUrl'

export const fetchCitiesForStates = (stateId) => {
    const url: string = `${URL_CITIES}` + "/" + `${stateId}`
    console.log(url)
    return fetch(url).then(response => response.json())
}