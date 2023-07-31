import {URL_HEMOCENTER} from './baseUrl'

export const fetchHemocenters = () => {
    const url: string = `${URL_HEMOCENTER}`
    return fetch(url).then(response => response.json())
}