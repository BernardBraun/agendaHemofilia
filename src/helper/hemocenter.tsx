const BASE_URL = 'http://10.1.11.249:8082/api';

export const fetchHemocenters = () => {
    const url: string = `${BASE_URL}` + "/hemocenter"
    return fetch(url).then(response => response.json())
}