import {URL_STATES} from './baseUrl'

export const fetchStates = () => {
    const url: string = `${URL_STATES}`
    return fetch(url).then(response => response.json())
}

