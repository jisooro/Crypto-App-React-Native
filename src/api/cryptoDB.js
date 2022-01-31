import axios from 'axios';

export const crypyoDB = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1',
    params: {
        CMC_PRO_API_KEY: 'ccfafebb-5891-470f-b472-5a8b2feea744',
    }
})

