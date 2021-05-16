import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happet.herokuapp.com',
});

export default api;