const BASE_URL = 'http://10.1.11.249:8082/api'

export const fetchStates = () => {
    const url: string = `${BASE_URL}/state`
    return fetch(url).then(response => response.json())
}

