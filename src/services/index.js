import axios from 'axios';
const chave = '15d7815608000b6489a4631a09958c67';
const axios_instance = axios.create({
    // baseURL: `https://api.openweathermap.org/data/2.5/weather?q=guarulhos&appid=15d7815608000b6489a4631a09958c67`,
    baseURL: `https://api.openweathermap.org/data/2.5`,
})

export const api = {
    getCity(city){
        let endpoint = `/weather?q=${city}&appid=15d7815608000b6489a4631a09958c67`
        return axios_instance.get(endpoint)
    },
    getHistoricalCity(endpoint, params = {}){
        return axios_instance.get(endpoint, params)
    }
}