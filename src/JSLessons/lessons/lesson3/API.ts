import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/?apikey=[dc8d7fee]&',
};
const key = 'dc8d7fee';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
